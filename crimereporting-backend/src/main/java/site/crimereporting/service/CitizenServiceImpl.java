//package site.crimereporting.service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;
//import java.util.Random;
//import java.io.IOException;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import site.crimereporting.custom_exception.ApiException;
//import site.crimereporting.custom_exception.AuthenticationException;
//import site.crimereporting.custom_exception.ResourceNotFoundException;
//import site.crimereporting.dao.AadhaarCardDao;
//import site.crimereporting.dao.AddressDao;
//import site.crimereporting.dao.CitizenDao;
//import site.crimereporting.dao.PoliceStationDao;
//import site.crimereporting.dao.PoliceStationUserDao;
//import site.crimereporting.dao.UserDao;
//import site.crimereporting.dtos.ApiResponse;
//import site.crimereporting.dtos.AuthRequest;
//import site.crimereporting.dtos.AuthResponse;
//import site.crimereporting.dtos.CitizenRegisterRequestDTO;
//import site.crimereporting.dtos.PoliceRegisterRequestDTO;
//import site.crimereporting.dtos.RegisterRequestDTO;
//import site.crimereporting.entity.AadhaarCard;
//import site.crimereporting.entity.Address;
//import site.crimereporting.entity.Citizen;
//import site.crimereporting.entity.PoliceStation;
//import site.crimereporting.entity.PoliceStationUser;
//import site.crimereporting.entity.User;
//import site.crimereporting.entity.UserRole;
//import site.crimereporting.security.JwtUtil;
//
//@Service
//@Transactional
//public class UserServiceImpl implements UserService {
//	@Autowired
//	private UserDao userDao;
//
//	@Autowired
//	private AadhaarCardDao aadhaarCardDao;
//
//	@Autowired
//	private AddressDao addressDao;
//
//	@Autowired
//	private CitizenDao citizenDao;
//
//	@Autowired
//	private PoliceStationDao policeStationDao;
//
//	@Autowired
//	private PoliceStationUserDao policeStationUserDao;
//
//	@Autowired
//	private ModelMapper mapper;
//
//	@Autowired
//	private JwtUtil jwtUtil;
//
//	@Autowired
//	private EmailService emailService;
//
//	@Autowired
//	private AuditService auditService;
//
//	private final Random random = new Random();
//
//	@Override
//	public ApiResponse<Citizen> registerCitizen(CitizenRegisterRequestDTO citizen) throws IOException {
//
//		// creating an object for mapping user class
//		RegisterRequestDTO userDto = mapper.map(citizen, RegisterRequestDTO.class);
//		System.out.println(userDto);
//
//		// creating user object
//		User user = mapper.map(userDto, User.class);
//		user.setRole(UserRole.CITIZEN);
//
////		//checking if citizen with email already exists
////		 userDao.findByEmail(user.getEmail()).orElseThrow(() -> new ApiException("citizen with email already exists!!"));
//
//		// creating aadhaar card object
//		AadhaarCard aadhaarCard = mapper.map(citizen, AadhaarCard.class);
//		// converting multipartfile image to byte[] and setting image
//		aadhaarCard.setImage(citizen.getImage().getBytes());
//
//		// creating Address object
//		Address address = mapper.map(citizen, Address.class);
//
//		// creating citizen object
//		Citizen citizenWantToRegister = mapper.map(citizen, Citizen.class);
//
//		// adding the reference of user, aaadharcard and address in citizen saving
//		// changes in database
//		citizenWantToRegister.setUser(user);
//		citizenWantToRegister.setAadhaarCard(aadhaarCard);
//		citizenWantToRegister.setAddress(address);
//
//		// saving citizen in database
//		Citizen registeredCitizen = citizenDao.save(citizenWantToRegister);
//
//		if (registeredCitizen == null)
//			throw new ApiException("citizen registration failed!");
//
//		return new ApiResponse<Citizen>("citizen registered successfully!", registeredCitizen);
//	}
//
//	@Override
//	public ApiResponse registerPolice(PoliceRegisterRequestDTO police) {
//
//		// creating an object for mapping user class
//		RegisterRequestDTO userDto = mapper.map(police, RegisterRequestDTO.class);
//
//		// creating user object
//		User user = mapper.map(userDto, User.class);
//		user.setRole(UserRole.POLICE);
//
////		//checking if police with email already exists
////		 userDao.findByEmail(user.getEmail()).orElseThrow(() -> new ApiException("police with email already exists!!"));
//
//		// finding the police station
//		PoliceStation policeStation = policeStationDao.findByStationCode(police.getStationCode())
//				.orElseThrow(() -> new ResourceNotFoundException("station code is not valid!"));
//
//		// creating a police station user
//		PoliceStationUser policeStationUser = new PoliceStationUser();
//		policeStationUser.setPoliceStation(policeStation);
//		policeStationUser.setUser(user);
//		policeStationUser.setDesignation(police.getDesignation());
//		policeStationUser.setName(police.getName());
//
//		PoliceStationUser registeredPolice = policeStationUserDao.save(policeStationUser);
//
//		if (registeredPolice == null)
//			throw new ApiException("police registration failed!");
//
//		return new ApiResponse<PoliceStationUser>("police registered successfully!", registeredPolice);
//
//	}
//
//	@Override
//	public Long getTotalUsers() {
//		return userDao.countByIsDeletedFalse();
//	}
//
//	@Override
//	public AuthResponse signIn(AuthRequest dto) {
//		// 1. invoke dao's method
//		User userEntity = userDao.findByEmailAndOtp(dto.getEmail(), dto.getOtp())
//				.orElseThrow(() -> new AuthenticationException("Invalid Email or otp !!!!!"));
//		// user entity : persistent -> dto
//		return mapper.map(userEntity, AuthResponse.class);
//	}
//
////	@Override
////    public String generateOtp(String email) {
////        String otp = String.valueOf(random.nextInt(900000) + 100000);
////        Optional<User> existingUser = userDao.findByEmail(email);
////        if (existingUser.isPresent()) {
////            User user = existingUser.get();
////            user.setOtp(otp);
////            userDao.save(user);
////            return "OTP sent successfully!";
////        }
////        throw new ApiException("User not found!");
////    }
//
//	@Override
//	public String generateOtp(String email) {
//		// Generate a 6-digit OTP
//		String otp = String.valueOf(random.nextInt(900000) + 100000);
//
//		Optional<User> existingUser = userDao.findByEmail(email);
//
//		if (existingUser.isPresent()) {
//			User user = existingUser.get();
//			user.setOtp(otp);
//			user.setOtpExpiry(LocalDateTime.now().plusMinutes(OTP_EXPIRY_MINUTES));  // Set OTP expiry
//			userDao.save(user);
//
//			// Send OTP via email
//			emailService.sendOtpEmail(email, otp);
//
//			return "OTP sent successfully!";
//		}
//
////	@Override
////    public String verifyOtp(String email, String otp) {
////        Optional<User> user = userDao.findByEmailAndOtp(email, otp);
////        if (user.isPresent()) {
////            String token = jwtUtil.generateToken(email);
////            user.get().setOtp(null);
////            return token;
////        }
////        throw new AuthenticationException("Invalid OTP!");
////    }
//
////	@Override
////	public String verifyOtp(String email, String otp) {
////	    Optional<User> user = userDao.findByEmailAndOtp(email, otp);
////	    
////	    if (user.isPresent()) {
////	        User existingUser = user.get();
////
////	        // Check if OTP expiry is null or expired
////	        if (existingUser.getOtpExpiry() == null || existingUser.getOtpExpiry().isBefore(LocalDateTime.now())) {
////	            throw new AuthenticationException("OTP expired!");
////	        }
////
////	        // Generate JWT token
////	        String token = jwtUtil.generateToken(email);
////
////	        // Clear OTP and expiry after successful verification
////	        existingUser.setOtp(null);
////	        existingUser.setOtpExpiry(null);
////
////	        // Save the updated user object
////	        userDao.save(existingUser);
////
////	        return token;
////	    }
////	    throw new AuthenticationException("Invalid OTP!");
////	}
//
//	@Override
//	public AuthResponse verifyOtp(String email, String otp) {
//		Optional<User> userOptional = userDao.findByEmailAndOtp(email, otp);
//
//		if (userOptional.isEmpty()) {
//			throw new AuthenticationException("Invalid OTP!");
//		}
//
//		User existingUser = userOptional.get();
//
//		// Check if OTP is expired
//		if (existingUser.getOtpExpiry() == null || existingUser.getOtpExpiry().isBefore(LocalDateTime.now())) {
//			throw new AuthenticationException("OTP expired!");
//		}
//
//		// Generate JWT token for valid OTP
//		String token = jwtUtil.generateToken(email);
//
//		// Clear OTP and expiry after successful verification
//		existingUser.setOtp(null);
//		existingUser.setOtpExpiry(null);
//
//		// Save the updated user object
//		User loginUser = userDao.save(existingUser);
//
//		// Log the user login for audit
//		ApiResponse<User> apiResponse = new ApiResponse<>("User logged in via OTP", loginUser);
//		auditService.userLogin(apiResponse);
//
//		// Return AuthResponse with the JWT token
//		return new AuthResponse("User login successful!", token, loginUser);
//	}
//}



package site.crimereporting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.custom_exception.AuthenticationException;
import site.crimereporting.custom_exception.ResourceNotFoundException;
import site.crimereporting.dao.*;
import site.crimereporting.dtos.*;
import site.crimereporting.entity.*;
import site.crimereporting.security.JwtUtil;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;


@Service
@Transactional
public class CitizenServiceImpl implements CitizenService {

    @Autowired
    private CitizenDao citizenDao;

    @Autowired
    private  UserDao userDao;

    @Autowired
    private AddressDao addressDao;

    @Autowired
    private FeedbackDao feedbackDao;

    @Autowired ModelMapper modelMapper;

    @Override
    public ApiResponse<?>  getLoggedInCitizenDetails() {
        // Get Current logged In Email from security Context Holder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInEmail = authentication.getName();
        //find citizen by logged in email
//        Citizen citizen = citizenDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("Citizen with Email does not exist"));
//        return new ApiResponse<>("Logged Citizen Information", citizen);

        Citizen citizen = citizenDao.findByUser_Email(loggedInEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Citizen with Email does not exist"));
        return new ApiResponse<>("Logged Citizen Information", citizen);
    }

    @Override
    public ApiResponse<?> updateLoggedInCitizenDetails(CitizenDTO citizenDTO) {
        // Get logged-in user's email
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInEmail = authentication.getName();
        User user = userDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));
        // Find Citizen by User's email
        Citizen citizen = citizenDao.findByUser(user);

        // Update Citizen details
        if (citizenDTO.getDateOfBirth() != null) {
            citizen.setDateOfBirth(citizenDTO.getDateOfBirth());
        }

        if (citizenDTO.getFullName() != null) {
            user.setFullName(citizenDTO.getFullName());

        }
        if (citizenDTO.getPhoneNumber() != null) {
            user.setPhoneNumber(citizenDTO.getPhoneNumber());

        }
        // Update Address details
        Address address = citizen.getAddress();
        if (citizenDTO.getAddressLine1() != null) {
            address.setAddressLine1(citizenDTO.getAddressLine1());
        }
        if (citizenDTO.getAddressLine2() != null) {
            address.setAddressLine2(citizenDTO.getAddressLine2());
        }
        if (citizenDTO.getCity() != null) {
            address.setCity(citizenDTO.getCity());
        }
        if (citizenDTO.getCountry() != null) {
            address.setCountry(citizenDTO.getCountry());
        }
        if (citizenDTO.getPinCode() != null) {
            address.setPinCode(citizenDTO.getPinCode());
        }

        userDao.save(user);
        // Save updated entities
        addressDao.save(address);
        citizenDao.save(citizen);

        // Return updated citizen details
        return new ApiResponse<>("Citizen profile updated successfully", citizenDTO);
    }

    @Override
    public ApiResponse<?> newFeedback(FeedbackRequestDTO feedbackRequestDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInEmail = authentication.getName();
        User user = userDao.findByEmail(loggedInEmail)
                .orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));
        Feedback  feedback = modelMapper.map(feedbackRequestDTO,Feedback.class);
        feedback.setUser(user);
        Feedback transientFeedback = feedbackDao.save(feedback);
        return new ApiResponse<>("New Feedback Created successfully",transientFeedback);
    }

}

