package site.crimereporting.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import site.crimereporting.dtos.ApiResponse;
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

	@GetMapping
	public ResponseEntity<?> renderAdminHome() {

		HashMap<String, Object> hashmap = new HashMap<>();
		List<String> authors = Arrays.asList("Lalini Sahu", "Pradyumna Mahajan", "Jasmine Kispott", "Pawan Gupta",
				"Mitali Gupta");
		hashmap.put("Authors", authors);
		hashmap.put("Project Name", "Crime Reporting System");
		return ResponseEntity.status(HttpStatus.OK)
				.body(new ApiResponse<>("Project is Working! This message is from project creator", hashmap));
	}

	@GetMapping("/users")
	public ResponseEntity<?> viewUsers() {
		return ResponseEntity.ok(adminService.getAllUsers());
	}
	
	@GetMapping("/policeStations")
	public ResponseEntity<?> viewPoliceStations() {
		return ResponseEntity.ok(adminService.getAllPoliceStations());
	}
}
