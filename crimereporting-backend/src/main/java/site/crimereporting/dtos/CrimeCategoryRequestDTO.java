package site.crimereporting.dtos;

import jakarta.validation.constraints.NotBlank;

public class CrimeCategoryRequestDTO {
	
	@NotBlank
	private String category;

	@NotBlank
	private String subCategory;

}
