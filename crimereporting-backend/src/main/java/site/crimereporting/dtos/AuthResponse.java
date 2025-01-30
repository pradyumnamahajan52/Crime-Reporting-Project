package site.crimereporting.dtos;

import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
public class AuthResponse extends BaseDTO {
	
	private UserRole role;
	
	private String email;
}
