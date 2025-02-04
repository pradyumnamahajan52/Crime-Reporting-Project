package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.User;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse extends BaseDTO {

	private String name;

	private UserRole role;

	private String email;
	private Boolean isActive;
	private String token;
	private String specialToken;

	public AuthResponse(String message, String token, User user) {
		 this.name = user.getFullName();
		this.role = user.getRole();
		this.email = user.getEmail();
		// this.isActive = user.getIsActive();
		this.token = token;
		this.specialToken = message;
	}
}
