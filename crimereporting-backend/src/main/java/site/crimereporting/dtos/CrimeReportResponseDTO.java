package site.crimereporting.dtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.Address;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.Status;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
