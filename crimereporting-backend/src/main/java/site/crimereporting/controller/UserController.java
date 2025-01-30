package site.crimereporting.controller;

import java.io.IOException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.OtpRequest;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;
import site.crimereporting.dtos.RegisterRequestDTO;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;
import site.crimereporting.service.UserService;
import site.crimereporting.service.UserServiceImpl;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserService userService;
	

	@PostMapping("/signin/email")
	public ResponseEntity<?> userOtpResq(@RequestBody @Valid OtpRequest Otpdto) {
		System.out.println("for otp request" + Otpdto);
		return ResponseEntity.ok("Otp request");
	}

	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto) {
		System.out.println("In user sign in " + dto);

		return ResponseEntity.ok("Login successfully");

	}

	@PostMapping("/register/citizen")
	public ResponseEntity<?> registerCitizen(@ModelAttribute @Valid CitizenRegisterRequestDTO citizen) throws IOException {
		
		System.out.println(citizen);
				
		ApiResponse<Citizen> registeredCitizen = userService.registerCitizen(citizen);

		if (registeredCitizen == null)
			throw new ApiException("citizen registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body(registeredCitizen);
	}
	
	
	@PostMapping("/register/police")
	public ResponseEntity<?> registerPoliceStationUser(@ModelAttribute PoliceRegisterRequestDTO police){
		
		ApiResponse<PoliceStationUser> registeredPolice = userService.registerPolice(police);

		if (registeredPolice == null)
			throw new ApiException("police registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body("police registration successfull!!");
			
	}
	

}