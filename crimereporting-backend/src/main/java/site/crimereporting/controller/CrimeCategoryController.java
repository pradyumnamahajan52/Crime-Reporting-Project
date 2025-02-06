package site.crimereporting.controller;

import java.util.List;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeCategoryDTO;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.service.CrimeCategoryService;

import static org.apache.http.HttpStatus.*;

@RestController
@RequestMapping("/crimecategory")
@CrossOrigin("*")
public class CrimeCategoryController {
	
	@Autowired
	private CrimeCategoryService crimeCategoryService;
	
	@GetMapping("/getCategories")
	public ResponseEntity<ApiResponse<List<CrimeCategoryDTO>>> getAllCrimeCategories(){
		
		ApiResponse<List<CrimeCategoryDTO>>  crimeCategoryDTO =  crimeCategoryService.getAllCategories();
		
		
		return ResponseEntity.status(SC_OK).body(crimeCategoryDTO);
	}

	@PostMapping("/addCategory")
	public ResponseEntity<?> AddCrimeCategory(@RequestBody CrimeCategoryDTO crimeCategoryDTO) {
		ApiResponse<CrimeCategoryDTO> addedCategory = crimeCategoryService.addCategory(crimeCategoryDTO);

		if (addedCategory == null) {
			throw new ApiException("Crime category addition failed!");
		}
		System.out.println("Category: " + crimeCategoryDTO.getCategory());
		System.out.println("SubCategory: " + crimeCategoryDTO.getSubCategory());
		return ResponseEntity.status(SC_OK).body(addedCategory);
	}

}
