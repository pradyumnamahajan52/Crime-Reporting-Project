package site.crimereporting.dtos;

import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.User;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PoliceStationUserDTO {
	
	private Long id;
	
	private String fullName;
	
	private String state;
	
	private String designation;

	private String email;
	
	private String phoneNumber;
}
