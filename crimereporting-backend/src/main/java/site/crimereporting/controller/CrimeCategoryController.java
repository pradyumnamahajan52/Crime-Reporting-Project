package site.crimereporting.controller;

import java.util.List;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeCategoryDTO;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.service.CrimeCategoryService;

@RestController
@RequestMapping("/crimecategory")
@CrossOrigin("*")
public class CrimeCategoryController {
	
	@Autowired
	private CrimeCategoryService crimeCategoryService;
	
	@GetMapping("/getCategories")
	public ResponseEntity<ApiResponse<List<CrimeCategoryDTO>>> getAllCrimeCategories(){
		
		ApiResponse<List<CrimeCategoryDTO>>  crimeCategoryDTO =  crimeCategoryService.getAllCategories();
		
		
		return ResponseEntity.status(HttpStatus.SC_OK).body(crimeCategoryDTO);
	}
}
