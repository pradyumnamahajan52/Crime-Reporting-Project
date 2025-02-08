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
public class TestDto {
    private Long policeStationId;
    private String stationName;
    private Long addressId;  // Instead of Address object, store addressId
    private Double latitude;
    private Double longitude;
    private Double distance;
	
	
}
