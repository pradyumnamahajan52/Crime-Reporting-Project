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
	public ApiResponse getDashboardDetails() {

		long userCount = userDao.countByIsDeletedFalse();
		long policeStationCount = policeStationDao.countByIsDeletedFalse();
		long cimeRegisteredCount = crimeReportsDao.countByIsDeletedFalse();
		Map<String, Long> counts = new HashMap<>();
		counts.put("userCount", userCount);
		counts.put("policeStationCount", policeStationCount);
		counts.put("cimeRegisteredCount", cimeRegisteredCount);
		return  new ApiResponse("Dashboard Data fetched successfully",counts);
	}

	@Override
	public ApiResponse newPoliceStationRegister(PoliceStationRegisterRequestDTO policeStationRegisterRequestDTO) {
		PoliceStation policeStation = mapper.map(policeStationRegisterRequestDTO,PoliceStation.class);
		Address address = mapper.map(policeStationRegisterRequestDTO,Address.class);
		policeStation.setAddress(address);
		policeStationDao.save(policeStation);
//		policeStationDao.
		return new ApiResponse("New Police Station Registered Successfully",policeStation);
	}

	@Override
	public ApiResponse getLoggedInUserDetails() {
		// Get Current logged In Email from security Context Holder
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();
		//find User by logged in email
		User user = userDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));
		return new ApiResponse("Logged Users Information",mapper.map(user, AdminUserDTO.class));
	}

	@Override
	public ApiResponse updateLoggedInUserDetails(AdminUserDTO adminUserDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();

		// Find User by logged-in email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Update user details
		user.setFullName(adminUserDTO.getFullName());
		user.setPhoneNumber(adminUserDTO.getPhoneNumber());

		// Save updated user back to DB
		user = userDao.save(user);

		// Return updated user details as DTO
		return new ApiResponse("Logged User's Information updated", mapper.map(user, AdminUserDTO.class));

	}

	@Override
	public ApiResponse getFeedbacks() {
		List<FeedbackResponse> feedbackResponseList = feedbackDao.findAll().stream().map(feedback -> {
			FeedbackResponse response = mapper.map(feedback, FeedbackResponse.class);
			response.setEmail(feedback.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse("feedback retrieved successfully", feedbackResponseList);
	}

	@Override
	public ApiResponse getAuditLogs() {
		List<AuditTrailsResponse> auditLogs = auditDao.findAll().stream().map(audit -> {
			AuditTrailsResponse response = mapper.map(audit, AuditTrailsResponse.class);
			response.setEmail(audit.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse("Audit logs retrieved successfully", auditLogs);
	}

	@Override
	public List<PoliceStation> getAllPoliceStations() {
		return policeStationDao.findAll();
	}

	@Override
	public List<CrimeCategory> getAllCrime() {
		return crimeCategoryDao.findAll();
	}

	@Override
	public List<CrimeReports> getAllReports() {
		return crimeReportsDao.findAll() ;
	}

}
