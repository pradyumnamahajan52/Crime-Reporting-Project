package site.crimereporting.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.custom_exception.ResourceNotFoundException;
import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.CrimeCategoryDao;
import site.crimereporting.dao.CrimeReportsDao;
import site.crimereporting.dao.FeedbackDao;
import site.crimereporting.dao.PoliceStationDao;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.*;
import site.crimereporting.entity.*;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PoliceStationDao policeStationDao;
	
	@Autowired
	private CrimeCategoryDao crimeCategoryDao;
	
	@Autowired
	private CrimeReportsDao crimeReportsDao;
	
	@Autowired
	private AuditDao auditDao;

	@Autowired
	private FeedbackDao feedbackDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<User> getAllUsers() {
		return userDao.findByIsDeletedFalse();
	}

	@Override
	public ApiResponse<?>  getDashboardDetails() {

		long userCount = userDao.countByIsDeletedFalse();
		long policeStationCount = policeStationDao.countByIsDeletedFalse();
		long cimeRegisteredCount = crimeReportsDao.countByIsDeletedFalse();
		Map<String, Long> counts = new HashMap<>();
		counts.put("userCount", userCount);
		counts.put("policeStationCount", policeStationCount);
		counts.put("cimeRegisteredCount", cimeRegisteredCount);
		return  new ApiResponse<>("Dashboard Data fetched successfully",counts);
	}

	@Override
	public ApiResponse<?>  newPoliceStationRegister(PoliceStationRegisterRequestDTO policeStationRegisterRequestDTO) {
		PoliceStation policeStation = mapper.map(policeStationRegisterRequestDTO,PoliceStation.class);
		Address address = mapper.map(policeStationRegisterRequestDTO,Address.class);
		System.out.println(address);
		policeStation.setAddress(address);
		policeStationDao.save(policeStation);
//		policeStationDao.
		return new ApiResponse<>("New Police Station Registered Successfully",policeStation);
	}

	@Override
	public ApiResponse<?>  getLoggedInUserDetails() {
		// Get Current logged In Email from security Context Holder
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();
		//find User by logged in email
		User user = userDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));
		return new ApiResponse<>("Logged Users Information",mapper.map(user, AdminUserDTO.class));
	}

	@Override
	public ApiResponse<?>  updateLoggedInUserDetails(AdminUserDTO adminUserDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();

		// Find User by logged-in email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Update user details
		user.setFullName(adminUserDTO.getFullName());
		user.setPhoneNumber(adminUserDTO.getPhoneNumber());
//		user.setRole(adminUserDTO.getRole());


		// Save updated user back to DB
		user = userDao.save(user);
//		System.out.println(user.toString());

		// Return updated user details as DTO
		return new ApiResponse<>("Logged User's Information updated", mapper.map(user, AdminUserDTO.class));

	}

	@Override
	public ApiResponse<?>  updateUserDetails(AdminUserDTO adminUserDTO) {

		// Find User by logged-in email
		User user = userDao.findByEmail(adminUserDTO.getEmail())
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Update user details
		user.setFullName(adminUserDTO.getFullName());
		user.setPhoneNumber(adminUserDTO.getPhoneNumber());
		user.setRole(adminUserDTO.getRole());


		// Save updated user back to DB
		user = userDao.save(user);
//		System.out.println(user.toString());

		// Return updated user details as DTO
		return new ApiResponse<>("User's Information updated", mapper.map(user, AdminUserDTO.class));
	}

	@Override
	public ApiResponse<?>  newUserDetails(AdminUserDTO adminUserDTO) {
		User user = mapper.map(adminUserDTO,User.class);
		user = userDao.save(user);
		return new ApiResponse<>("User's Created Sucessfully", mapper.map(user, AdminUserDTO.class));
	}

	@Override
	public ApiResponse<?>  logicalDeleteUser(Long id) {
		User user = userDao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User with id does not exist"));
		user.setIsDeleted(true);

		// Save updated user back to DB
		user = userDao.save(user);
		return new ApiResponse<>("User's Deleted Sucessfully", mapper.map(user, AdminUserDTO.class));

	}

	@Override
	public ApiResponse<?>  getFeedbacks() {
		List<FeedbackResponse> feedbackResponseList = feedbackDao.findAll().stream().map(feedback -> {
			FeedbackResponse response = mapper.map(feedback, FeedbackResponse.class);
			response.setEmail(feedback.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse<>("feedback retrieved successfully", feedbackResponseList);
	}

	@Override
	public ApiResponse<?>  getAuditLogs() {
		List<AuditTrailsResponse> auditLogs = auditDao.findAll().stream().map(audit -> {
			AuditTrailsResponse response = mapper.map(audit, AuditTrailsResponse.class);
			response.setEmail(audit.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse<>("Audit logs retrieved successfully", auditLogs);
	}

	@Override
	public List<PoliceStation> getAllPoliceStations() {
		return policeStationDao.findByIsDeletedFalse();
	}

	@Override
	public ApiResponse<?> getPoliceStationDetails(Long id) {
		PoliceStation policeStation = policeStationDao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Police Stations with id does not exist"));
		return new ApiResponse<>("Police Station retrieved successfully",mapper.map(policeStation, PoliceStationResponseDTO.class));
	}

	@Override
	public List<CrimeCategory> getAllCrime() {
		return crimeCategoryDao.findByIsDeletedFalse();
	}

	@Override
	public ApiResponse<?>  getAllReports() {
		List<CrimeReports> crimeReportsList = crimeReportsDao.findByIsDeletedFalse();

		// Proper conversion using ModelMapper for lists
		List<AdminCrimeReportDTO> adminCrimeReportDTOList = crimeReportsList.stream()
				.map(report -> mapper.map(report, AdminCrimeReportDTO.class))
				.collect(Collectors.toList());


		return new ApiResponse<>("All Crime Reports fetched successfully",adminCrimeReportDTOList);
	}

	@Override
	public ApiResponse<?> updatePoliceStation(PoliceStationRegisterRequestDTO policeStationForUpdate) {
		
		PoliceStation policeStation =  policeStationDao.findByStationCode(policeStationForUpdate.getStationCode()).orElseThrow(() -> new ResourceNotFoundException("police station with "+policeStationForUpdate.getStationCode() +"does not exist"));
		
		policeStation.setStationName(policeStationForUpdate.getStationName());
		Address address = new Address(policeStationForUpdate.getAddressLine1(), policeStationForUpdate.getAddressLine2(), policeStationForUpdate.getCity(), policeStationForUpdate.getState(), policeStationForUpdate.getCountry(), policeStationForUpdate.getPinCode() ,policeStationForUpdate.getLatitude(), policeStationForUpdate.getLongitude());
		policeStation.setAddress(address);
		
		
		return new ApiResponse<>("police station updated successfully", policeStation);
	}

	
	
}
