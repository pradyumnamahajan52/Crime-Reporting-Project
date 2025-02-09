package site.crimereporting.dtos;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.Status;

@Getter
@Setter
@AllArgsConstructor
public class CrimeReportResponseDTO {
	
	private Long citizenId;
	
	private Long crimeReportId;
	
    private String description;

    private Status reportStatus;

    List<NearByPoliceStationDTO> nearByPoliceStationList = new ArrayList<>();

}
