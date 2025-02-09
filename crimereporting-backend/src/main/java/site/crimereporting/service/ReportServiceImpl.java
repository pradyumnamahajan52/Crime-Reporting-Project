package site.crimereporting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.custom_exception.ResourceNotFoundException;
import site.crimereporting.dao.AddressDao;
import site.crimereporting.dao.CitizenDao;
import site.crimereporting.dao.CrimeCategoryDao;
import site.crimereporting.dao.CrimeReportsDao;
import site.crimereporting.dao.EvidenceDao;
import site.crimereporting.dao.PoliceStationDao;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.dtos.CrimeReportStatusDTO;
import site.crimereporting.dtos.FileUploadInfoDTO;
import site.crimereporting.dtos.NearByPoliceStationDTO;
import site.crimereporting.entity.Address;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.Evidence;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.Status;
import site.crimereporting.entity.User;
import site.crimereporting.utils.ExtractFileNameFromUrl;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {

	@Autowired
	private CrimeReportsDao crimeReportsDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private CitizenDao citizenDao;

	@Autowired
	private EvidenceDao evidenceDao;

	@Autowired
	private CrimeCategoryDao crimeCategoryDao;

	@Autowired
	private CrimeReportsDao crimeReportDao;

	@Autowired
	private PoliceStationDao policeStationDao;

	@Autowired
	private AddressDao addressDao;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private S3ImageUploader s3ImageUploader;

	@Override
	public ApiResponse<CrimeReportResponseDTO> newReport(CrimeReportDTO crimereport) {
		// Mapping Reports
		CrimeReports crimeReports = modelMapper.map(crimereport, CrimeReports.class);

		// Get Current logged In Email from security Context Holder
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();
		// find User by logged in email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// finding citizen by using user
		Citizen citizen = citizenDao.findByUser(user);

		if (citizen == null)
			throw new ApiException("cannot find Citizen");
		crimeReports.setCitizen(citizen);
		// Mapping address to address to entity and setting it crime reports
		Address address = modelMapper.map(crimereport, Address.class);
		crimeReports.setAddress(address);
		// finding crime category and setting it crime category
		CrimeCategory crimeCategory = crimeCategoryDao.findById(crimereport.getCrimeCategoryId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Crime Category"));
		crimeReports.setCrimeCategory(crimeCategory);

		// setting default status of crime reported
		crimeReports.setReportStatus(Status.SUBMITTED);
		CrimeReports persistentCrimeReports = crimeReportsDao.save(crimeReports);

		if (persistentCrimeReports == null) {
			throw new ApiException("Crime Reporting failed");
		}

		if (crimereport.getEvidences() != null) {
			for (MultipartFile file : crimereport.getEvidences()) {
				FileUploadInfoDTO fileUploadInfoDTO = s3ImageUploader.uploadImage(file);
				Evidence evidence = new Evidence();
				evidence.setCrimeReports(persistentCrimeReports);
				evidence.setFileUrl(fileUploadInfoDTO.getFileUrl());
				evidence.setFileType(fileUploadInfoDTO.getFileType());
				evidenceDao.save(evidence);
			}

		}

		// finding near by police stations list
		List<Object[]> nearestStations = policeStationDao.getNearestPoliceStations(address.getLatitude(),
				address.getLongitude(), 3);

		List<NearByPoliceStationDTO> nearByPoliceStationList = new ArrayList<>();
		for (Object obj : nearestStations) {
			Object[] row = (Object[]) obj; // Cast each object to Object[]

			NearByPoliceStationDTO nearByPoliceStation = new NearByPoliceStationDTO();
			nearByPoliceStation.setPoliceStationId((Long) row[0]);
			nearByPoliceStation.setStation_name((String) row[1]);

			Address add = addressDao.findById((Long) row[2]).orElseGet(null);
			nearByPoliceStation.setPoliceStationAddressLine1(add.getAddressLine1());
			nearByPoliceStation.setPoliceStationAddressLine2(add.getAddressLine2());
			nearByPoliceStation.setPoliceStationCity(add.getCity());
			nearByPoliceStation.setPoliceStationState(add.getState());

			nearByPoliceStation.setLatitude((Double) row[3]);
			nearByPoliceStation.setLongitude((Double) row[4]);
			nearByPoliceStation.setDistance((Double) row[5]);

			nearByPoliceStationList.add(nearByPoliceStation);
		}

		return new ApiResponse<CrimeReportResponseDTO>("Crime Report Uploaded Successfully",
				new CrimeReportResponseDTO(persistentCrimeReports.getCitizen().getId(), persistentCrimeReports.getId(),
						persistentCrimeReports.getDescription(), persistentCrimeReports.getReportStatus(),
						nearByPoliceStationList));
	}

	@Override
	public List<CrimeReportStatusDTO> getAllReportStatusById() {
		// Get Current logged-in Email
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();

		// Find User by Email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Find Citizen
		Citizen citizen = citizenDao.findByUser(user);
		if (citizen == null) {
			throw new ApiException("Cannot find Citizen associated with the user");
		}

		// Fetch Crime Reports and Convert to DTOs
		return crimeReportsDao.findByCitizen(citizen).stream().map(crime -> new CrimeReportStatusDTO(crime.getId(), // ✅
																													// Include
																													// crimeId
				crime.getCrimeCategory(), crime.getCrimeDate(), crime.getReportStatus(), crime.getDescription()))
				.collect(Collectors.toList());
	}

	public ApiResponse<?> crimeReportUpdatePoliceStation(Long crimeReportId, Long policeStationId) {
		CrimeReports crimeReports = crimeReportsDao.findById(crimeReportId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Crime Reports Id"));
		PoliceStation policeStation = policeStationDao.findById(policeStationId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Police station Id"));
		crimeReports.setPoliceStation(policeStation);
		crimeReportsDao.save(crimeReports);
		return new ApiResponse("Police Station updated sucessfully",
				new CrimeReportResponseDTO(crimeReports.getCitizen().getId(), crimeReports.getId(),
						crimeReports.getDescription(), crimeReports.getReportStatus(), null));
	}

	@Override
	public ApiResponse<?> getReportsEvidence(Long crimeReportId) {
		List<Evidence> evidences = evidenceDao.findByCrimeReports_Id(crimeReportId);

		if (evidences == null)
			throw new ApiException("evidences of this report not found");
		List<String> fileNames = new ArrayList<>();
//                List<EvidenceResponseDTO> evidenceResponseDTOList = new ArrayList<>();
		evidences.forEach((evidence) -> {
			ExtractFileNameFromUrl extractFileNameFromUrl = new ExtractFileNameFromUrl();
			fileNames.add(extractFileNameFromUrl.extractFileName(evidence.getFileUrl()));
		});
		List<String> preSignedUrls = s3ImageUploader.preSignedUrl(fileNames);

		return new ApiResponse("Evidences fetched sucessfully", preSignedUrls);
	}

	@Override
	public ApiResponse<?> getReportDetails(Long crimeReportId) {
		
		CrimeReports crimeReports =  crimeReportsDao.findById(crimeReportId).orElseThrow(() -> new ResourceNotFoundException("Crime Report with id " + crimeReportId + " doesn't exist"));
		
		Address crimeAddress = addressDao.findById(crimeReports.getAddress().getId()).orElseThrow(()-> new ResourceNotFoundException("crime address not found"));
		
		CrimeCategory category = crimeCategoryDao.findById(crimeReports.getCrimeCategory().getId()).orElseThrow(()-> new ResourceNotFoundException("crime category not found"));
		
		String stationName = null;
		
		 PoliceStation policeStation = crimeReports.getPoliceStation();
		 Address stationAddress = null;
		 String stationAddressLine1 = null;
		 String stationAddressLine2 = null;
		 String	stationCity = null;
		 String stationState = null;
		 String stationCountry = null;
		 String	stationPinCode = null;
		 
		 if(policeStation != null) {
			 stationName  = policeStation.getStationName();
			 stationAddress = addressDao.findById(policeStation.getAddress().getId()).orElseThrow(() -> new ResourceNotFoundException("station adress not found"));
			 stationAddressLine1 = stationAddress.getAddressLine1();
			 stationAddressLine2 = stationAddress.getAddressLine2();
			 stationCity = stationAddress.getCity();
			 stationState = stationAddress.getState();
			 stationCountry =  stationAddress.getCountry();
			 stationPinCode = stationAddress.getPinCode();
		 }
		 
		
		
		
		
		return new ApiResponse<CrimeReportDetailsDTO>("crime report details fetched successfully", new CrimeReportDetailsDTO(
				crimeReports.getCrimeDate(),
				crimeReports.getDescription(),
				crimeAddress.getAddressLine1(),
				crimeAddress.getAddressLine2(),
				crimeAddress.getCity(),
				crimeAddress.getState(),
				crimeAddress.getCountry(),
				crimeAddress.getPinCode(),
				category.getCategory(),
				category.getSubCategory(),
				stationName,
				stationAddressLine1,
				stationAddressLine2,
				stationCity,
				stationState,
				stationCountry,
				stationPinCode
				));
	}

}
