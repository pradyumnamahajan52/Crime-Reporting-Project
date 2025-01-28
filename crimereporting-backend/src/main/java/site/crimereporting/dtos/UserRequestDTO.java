package site.crimereporting.dtos;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import site.crimereporting.entity.UserRole;

public class UserRequestDTO {
	
	private UserRole role;

	@Email
	private String email;

	private String phoneNumber;

}
