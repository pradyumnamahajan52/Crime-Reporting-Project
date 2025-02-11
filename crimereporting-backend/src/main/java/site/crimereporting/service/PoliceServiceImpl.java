



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

import jakarta.validation.Valid;
import site.crimereporting.custom_exception.ResourceNotFoundException;
import site.crimereporting.dao.CrimeCategoryDao;
import site.crimereporting.dao.CrimeReportsDao;
import site.crimereporting.dao.FeedbackDao;
import site.crimereporting.dao.PoliceStationUserDao;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.AdminCrimeReportDTO;
import site.crimereporting.dtos.AdminUserDTO;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.FeedbackResponse;
import site.crimereporting.dtos.PoliceUserDTO;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.User;

@Service
@Transactional
public class PoliceServiceImpl implements PoliceService {

    @Autowired
    private FeedbackDao feedbackDao;
    
    @Autowired
    private UserDao userDao;
    
    @Autowired
    private PoliceStationUserDao policeStationUserDao;
    
    @Autowired
    private CrimeReportsDao crimeReportsDao;
    
    @Autowired
    private CrimeCategoryDao crimeCategoryDao;
   

    @Autowired
    private ModelMapper mapper;

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
	public ApiResponse getLoggedInPoliceDetails() {
		// Get Current logged In Email from security Context Holder
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();
		//find User by logged in email
		User user = userDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));
			
		return new ApiResponse("Logged Users Information",mapper.map(user, AdminUserDTO.class));
	}

	@Override
	public ApiResponse<?>  getAllReports(String email) {
		
		List<CrimeReports> crimeReportsList =  crimeReportsDao.getCrimeReports(email);
		
		List<AdminCrimeReportDTO> crimereportsDTOList = new ArrayList<>();
		crimeReportsList.forEach((s)-> {
			AdminCrimeReportDTO crime =  mapper.map(s, AdminCrimeReportDTO.class);
			crimereportsDTOList.add(crime);
		});
		
		return new ApiResponse<>("All Crime Reports fetched successfully",  crimereportsDTOList);
	}

	@Override
	public List<CrimeCategory> getAllCrime() {
		return crimeCategoryDao.findByIsDeletedFalse();
	}

	@Override
	public ApiResponse<?> updateUserDetails(@Valid PoliceUserDTO policeUserDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();

		// Find User by logged-in email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Update user details
		user.setFullName(policeUserDTO.getFullName());
		user.setPhoneNumber(policeUserDTO.getPhoneNumber());


		// Save updated user back to DB
		user = userDao.save(user);
//		System.out.println(user.toString());

		// Return updated user details as DTO
		return new ApiResponse<>("Logged User's Information updated",  mapper.map(user, PoliceUserDTO.class));
	}

	@Override
	public ApiResponse<?> updateLoggedInUserDetails(PoliceUserDTO policeUserDTO) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String loggedInEmail = authentication.getName();

		// Find User by logged-in email
		User user = userDao.findByEmail(loggedInEmail)
				.orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

		// Update user details
		user.setFullName(policeUserDTO.getFullName());
		user.setPhoneNumber(policeUserDTO.getPhoneNumber());
//		user.setRole(adminUserDTO.getRole());


		// Save updated user back to DB
		user = userDao.save(user);
//		System.out.println(user.toString());

		// Return updated user details as DTO
		return new ApiResponse<>("Logged User's Information updated", mapper.map(user, PoliceUserDTO.class));

	}


}

