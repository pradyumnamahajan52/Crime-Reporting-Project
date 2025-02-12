package site.crimereporting.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CrimeCategoryRequestDTO {
	
	@NotBlank
	private String category;

	@NotBlank
	private String subCategory;

}
