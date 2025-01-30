package site.crimereporting.dtos;

import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
public class AuthResponse extends BaseDTO {

	private String name;

	private UserRole role;

	private String email;
	private Boolean isActive;
	private String token;
	private String specialToken;
}
