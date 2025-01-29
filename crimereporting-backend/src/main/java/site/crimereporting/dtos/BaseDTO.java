package site.crimereporting.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BaseDTO {
	
	private Long id;
	
	private LocalDate createdOn;
	
	private LocalDateTime updatedOn;
}

