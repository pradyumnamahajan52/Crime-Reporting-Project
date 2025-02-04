package site.crimereporting.dtos;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString(callSuper = true)
@Getter
@Setter
public class RegisterRequestDTO {
			//from User
			@Email
			private String email;

			@Size(min=10, max=10)
			private String phoneNumber;
			
			private String password;
			
			private String fullName;
}
