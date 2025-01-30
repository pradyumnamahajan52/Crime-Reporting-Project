package site.crimereporting.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.AadhaarCard;
import site.crimereporting.entity.User;
import site.crimereporting.entity.UserRole;

@ToString(callSuper = true)
@Getter
@Setter
public class CitizenRegisterRequestDTO extends RegisterRequestDTO{
	
	
	
	//from citizen
	private String fullName;

	private LocalDate dateOfBirth;
	
	//from aadhaar card
	private String cardNumber;
	
	private Byte[] image;
	
	
	//from address
	private String addressLine1;
	
	private String addressLine2;

	private String city;

	private String state;

	private String country;

	private String pinCode;

	private Double latitude;

	private Double longitude;
}
