package site.crimereporting.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dtos.*;
import site.crimereporting.service.PoliceService;
import site.crimereporting.service.ReportService;
import site.crimereporting.service.UserService;

import java.io.IOException;
import java.util.Collections;


@RestController
@RequestMapping("/police")
@CrossOrigin("*")
public class PoliceController {
	@Autowired
	private PoliceService policeService;
	
	@Autowired
	private ReportService reportService;

	@GetMapping("/feedback")
	public ResponseEntity<?> renderFeedback() {
		return ResponseEntity.status(HttpStatus.OK).body(policeService.getFeedbacks());
	}

	@GetMapping("/profile")
	public ResponseEntity<?> renderLoggedInPoliceDetail() {
		return ResponseEntity.ok(policeService.getLoggedInPoliceDetails());
	}
	
	@GetMapping("/reports")
	public ResponseEntity<?> viewReports() {
		
		return ResponseEntity.ok(policeService.getAllReports(SecurityContextHolder.getContext().getAuthentication().getName()));

	}
	
	@PostMapping("/get-reportDetails")
    public ResponseEntity<?> getReportDetails(@RequestParam Long crimeReportId){
    	
    	
		return ResponseEntity.status(HttpStatus.OK).body(reportService.getReportDetails(crimeReportId));
    	
    }
	
	@PostMapping("/get-evidence")
	public ResponseEntity<?> getReportsEvidence(@RequestParam("crimeReportId") Long crimeReportId){
		System.out.println(crimeReportId);
		return ResponseEntity.status(HttpStatus.OK).body(reportService.getReportsEvidence(crimeReportId));
		
	}

	
	@PatchMapping
	public ResponseEntity<?> updateStatus(@RequestParam Long crimeReportId, @RequestParam String status){
		
		
		
		return null;
		
	}
}