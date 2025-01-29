package site.crimereporting.controller;

<<<<<<< HEAD
=======
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
>>>>>>> refs/remotes/origin/main
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
<<<<<<< HEAD

import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.OtpRequest;
import site.crimereporting.service.UserService;
=======
>>>>>>> refs/remotes/origin/main
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
import site.crimereporting.service.UserServiceImpl;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
<<<<<<< HEAD
	private UserService userService;
=======
	private UserServiceImpl userService;
	
>>>>>>> refs/remotes/origin/main

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

<<<<<<< HEAD
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody @Valid UserRequestDTO user) {
		ApiResponse<User> registeredUser =  userService.registeruser(user);
=======
	@PostMapping("/register/citizen")
	public ResponseEntity<?> registerCitizen(@RequestBody @Valid CitizenRegisterRequestDTO citizen) {
		
		System.out.println(citizen);
				
		ApiResponse<Citizen> registeredCitizen = userService.registerCitizen(citizen);

		if (registeredCitizen == null)
			throw new ApiException("citizen registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body(registeredCitizen);
	}
	
	
	@PostMapping("/register/police")
	public ResponseEntity<?> registerPoliceStationUser(@RequestBody PoliceRegisterRequestDTO police){
>>>>>>> refs/remotes/origin/main
		
		ApiResponse<PoliceStationUser> registeredPolice = userService.registerPolice(police);

		if (registeredPolice == null)
			throw new ApiException("police registration failed!!");

		return ResponseEntity.status(HttpStatus.CREATED).body("police registration successfull!!");
			
	}
	

}