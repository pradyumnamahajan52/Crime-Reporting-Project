package site.crimereporting.dtos;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.Status;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CrimeReportStatusDTO extends BaseDTO {

	private Long crimeId;
	
	private CrimeCategory crimeCategory;

	private LocalDate crimeDate;

	private Status reportStatus;

	private String description;

}
