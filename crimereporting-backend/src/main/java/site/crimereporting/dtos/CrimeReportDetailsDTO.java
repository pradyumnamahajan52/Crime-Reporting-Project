package site.crimereporting.dtos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CrimeReportDetailsDTO {
	private Long crimeReportId;
	private LocalDate crimeDate;
	private String description;
	
	//crime address 
	private String addressLine1;
	private String addressLine2;
	private String city;
	private String state;
	private String country;
	private String pinCode;
	
	//crime category 
	private String category;
	private String subCategory;
	
	//police station address
	private String stationName;
	private String stationAddressLine1;
	private String stationAddressLine2;
	private String stationCity;
	private String stationState;
	private String stationCountry;
	private String stationPinCode;
}
