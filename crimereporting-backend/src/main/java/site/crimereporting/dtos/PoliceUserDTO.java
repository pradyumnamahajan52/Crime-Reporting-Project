package site.crimereporting.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import site.crimereporting.entity.UserRole;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PoliceUserDTO 
{
	private String email;
	
	private UserRole role;
	
	@NotBlank(message = "Full Name must be filled!! ")
	private String fullName;
	
	private String phoneNumer;
}
