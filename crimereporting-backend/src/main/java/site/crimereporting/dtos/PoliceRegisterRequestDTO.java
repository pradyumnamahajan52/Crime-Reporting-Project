package site.crimereporting.dtos;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.Address;

@ToString(callSuper = true)
@Getter
@Setter
public class PoliceRegisterRequestDTO extends RegisterRequestDTO{
		
		//from police station user
		private Integer stationCode;
		
		private String designation;

		
}
