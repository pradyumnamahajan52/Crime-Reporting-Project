package site.crimereporting.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dtos.*;
import site.crimereporting.service.PoliceService;
import site.crimereporting.service.UserService;

import java.io.IOException;
import java.util.Collections;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/police")
@CrossOrigin("*")
public class PoliceController {
	@Autowired
	private PoliceService policeService;

	@GetMapping("/feedback")
	public ResponseEntity<?> renderFeedback() {
		return ResponseEntity.status(HttpStatus.OK).body(policeService.getFeedbacks());
	}

	@GetMapping("/profile")
	public ResponseEntity<?> renderLoggedInPoliceDetail() {
		return ResponseEntity.ok(policeService.getLoggedInPoliceDetails());
	}
	
}