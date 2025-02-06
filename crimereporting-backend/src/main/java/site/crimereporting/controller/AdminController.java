package site.crimereporting.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import site.crimereporting.dtos.AdminUserDTO;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.OtpRequest;
import site.crimereporting.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@GetMapping("/feedback")
	public ResponseEntity<?> renderFeedback() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getFeedbacks());
	}

	@GetMapping("/auditlog")
	public ResponseEntity<?> renderAuditLog() {
		return ResponseEntity.status(HttpStatus.OK).body(adminService.getAuditLogs());
	}

	@GetMapping("/dashboard")
	public ResponseEntity<?> renderAdminHome() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(adminService.getDashboardDetails());
	}

	@GetMapping("/users")
	public ResponseEntity<?> viewUsers() {
		return ResponseEntity.ok(adminService.getAllUsers());
	}

	@GetMapping("/user/details")
	public ResponseEntity<?> renderUserDetails() {
		return ResponseEntity.ok(adminService.getLoggedInUserDetails());
	}

	@PutMapping("/user/details")
	public ResponseEntity<?> updateUserDetails(@RequestBody @Valid AdminUserDTO adminUserDTO) {
		return ResponseEntity.ok(adminService.updateLoggedInUserDetails(adminUserDTO));
	}


	@GetMapping("/policeStations")
	public ResponseEntity<?> viewPoliceStations() {
		return ResponseEntity.ok(adminService.getAllPoliceStations());
	}
	
	@GetMapping("/crimeList")
	public ResponseEntity<?> viewCrimeList() {
		return ResponseEntity.ok(adminService.getAllCrime());
	}
	
	@GetMapping("/reports")
	public ResponseEntity<?> viewReports() {
		return ResponseEntity.ok(adminService.getAllReports());
	}
}
