package site.crimereporting.dtos;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString(callSuper = true)
@Getter
@Setter
public class CitizenRegisterRequestDTO extends RegisterRequestDTO{
	
	
	
	//from citizen
	private LocalDate dateOfBirth;
	
	//from aadhaar card
	private String cardNumber;
	
	private MultipartFile image;

	
	
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
