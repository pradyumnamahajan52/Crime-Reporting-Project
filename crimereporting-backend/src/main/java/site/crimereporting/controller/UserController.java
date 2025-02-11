package site.crimereporting.controller;

import java.io.IOException;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dao.PoliceStationUserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.OtpRequest;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;
import site.crimereporting.dtos.RegisterResponseDTO;
import site.crimereporting.dtos.*;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.service.CitizenService;
import site.crimereporting.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	

	@Autowired
	private CitizenService citizenService;


	@PostMapping("/signin/email")
	public ResponseEntity<?> requestOtp(@RequestBody @Valid OtpRequest otpRequest) {
		return ResponseEntity
				.ok(new ApiResponse(userService.generateOtp(otpRequest.getEmail()), Collections.emptyList()));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto) {
		System.out.println("sigin in working");
		System.out.println("In user sign in " + dto);

		try {
			return ResponseEntity.ok(userService.verifyOtp(dto.getEmail(), dto.getOtp()));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during sign-in");

	}

	@PostMapping("/register/citizen")
	public ResponseEntity<?> registerCitizen(@ModelAttribute @Valid CitizenRegisterRequestDTO citizen)
			throws IOException {

		System.out.println(citizen);

		ApiResponse<RegisterResponseDTO> registeredCitizen = userService.registerCitizen(citizen);

		if (registeredCitizen == null)
			throw new ApiException("citizen registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body(registeredCitizen);
	}

	@PostMapping("/register/police")
	public ResponseEntity<?> registerPoliceStationUser(@ModelAttribute PoliceRegisterRequestDTO police) {

		ApiResponse<RegisterResponseDTO> registeredPolice = userService.registerPolice(police);

		if (registeredPolice == null)
			throw new ApiException("police registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body(registeredPolice);

	}

	
	@GetMapping("/getPoliceStationUserDetails")
	public ResponseEntity<?> getPoliceStationUserDetails(){
		return ResponseEntity.status(HttpStatus.OK).body(userService.getPoliceStationUserDetails());
		
	}

	@GetMapping("/citizendetails")
	public ResponseEntity<?> renderAllCitizenDetails() {
		return ResponseEntity.ok(citizenService.getLoggedInCitizenDetails());
	}


	@PutMapping("/updatedetails")
	public ResponseEntity<?> updateLoggedInCitizenDetails(@RequestBody @Valid CitizenDTO citizenDTO) {
		return ResponseEntity.ok(citizenService.updateLoggedInCitizenDetails(citizenDTO));
	}

	@PostMapping("/feedback")
	public ResponseEntity<?> newUserFeedbacks(@ModelAttribute FeedbackRequestDTO feedbackRequestDTO) {
//		System.out.println(feedbackRequestDTO.toString());
		return ResponseEntity.status(HttpStatus.CREATED).body(citizenService.newFeedback(feedbackRequestDTO));
	}



}