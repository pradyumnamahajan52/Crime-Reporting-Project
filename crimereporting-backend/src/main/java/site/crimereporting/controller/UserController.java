package site.crimereporting.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.OtpRequest;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@PostMapping("/signin/email")
	public ResponseEntity<?> userOtpResq(@RequestBody @Valid OtpRequest Otpdto ) {
		System.out.println("for otp request" + Otpdto);
		return ResponseEntity.ok("Otp request");
	}

	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto ) {
		System.out.println("In user sign in " + dto);
		
		return ResponseEntity.ok("Login successfully");
	}
}
