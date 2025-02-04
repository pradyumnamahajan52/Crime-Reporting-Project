package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class RegisterResponseDTO {
	private String fullname;
	
	private String email;
	
	private UserRole role;

}
