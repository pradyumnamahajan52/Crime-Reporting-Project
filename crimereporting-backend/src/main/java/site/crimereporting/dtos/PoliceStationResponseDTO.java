package site.crimereporting.dtos;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.Address;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PoliceStationResponseDTO {

    private Integer stationCode;

    private String stationName;

    private Address address;

}
