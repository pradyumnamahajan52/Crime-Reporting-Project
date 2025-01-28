package site.crimereporting.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

import jakarta.validation.Valid;

import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.OtpRequest;
import site.crimereporting.service.UserService;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.UserRequestDTO;
import site.crimereporting.entity.User;

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

	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody @Valid UserRequestDTO user) {
		ApiResponse<User> registeredUser =  userService.registeruser(user);
		
		if(registeredUser == null)
			return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(new ApiException("user registration failed!!"));
		
		return  ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
}
