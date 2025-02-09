package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.Status;

@Getter
@Setter
@AllArgsConstructor
public class CrimeReportResponseDTO {
	
	private Long citizenId;
	
    private String description;

    private Status reportStatus;



}
