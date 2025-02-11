package site.crimereporting.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PoliceUserDTO 
{
	private String email;
	
	private UserRole role;
	
	@NotBlank(message = "Full Name must be filled!! ")
	private String fullName;
	
	private String phoneNumber;
}
