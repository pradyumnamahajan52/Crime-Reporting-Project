package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class NearByPoliceStationDTO {

	//police station Info
	private String policeStationName;

	private Long policeStationId;

	private String policeStationAddressLine1;

	private String policeStationAddressLine2;

	private String policeStationCity;

	private String policeStationState;

}
