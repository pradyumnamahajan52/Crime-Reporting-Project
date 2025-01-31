package site.crimereporting.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class AuthRequest {
	@NotBlank(message = "Email must be not null and not blank !!")
	@Email(message = "Invalid email format")
	private String email;
	
	@NotBlank
	private String otp;
}
