package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "password", "otp", "otpCreatedAt" })
public class User extends BaseEntity {

	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private UserRole role;
	@Column(length = 160, unique = true) // adds unique constraint
	private String email;
	@Column(name = "phone_number", length = 10, nullable = true) // not null constraint
	private String phoneNumber;
	@Column(length = 6, nullable = true) // not null constraint
	private String otp;
	
	@Column(name = "otp_expiry")
	private LocalDateTime otpExpiry;

	@Column(name = "otp_created_at", nullable = true) // not null constraint
	private LocalDateTime otpCreatedAt;
	@Column(length = 255, nullable = true) // not null constraint
	private String password;

}
