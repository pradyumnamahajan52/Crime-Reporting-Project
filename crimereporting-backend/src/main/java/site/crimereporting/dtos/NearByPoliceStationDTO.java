package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.Address;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NearByPoliceStationDTO {
	//from proxy object
    private Long  policeStationId;
    private String station_name;

    //from Address
    private String policeStationAddressLine1;

	private String policeStationAddressLine2;

	private String policeStationCity;

	private String policeStationState;
	
	private Double latitude;
	
    private Double longitude;
    
    //from proxy object
    private Double distance;

}
