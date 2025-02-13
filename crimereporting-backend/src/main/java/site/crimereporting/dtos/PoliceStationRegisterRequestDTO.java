package site.crimereporting.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PoliceStationRegisterRequestDTO {

    private Long policeStationId;
    private Integer stationCode;
    private String stationName;
    private String addressLine1;
    private String addressLine2;

    private String city;
    private String state;

    private String country;

    private String pinCode;
    private Double latitude;

    private Double longitude;

}
