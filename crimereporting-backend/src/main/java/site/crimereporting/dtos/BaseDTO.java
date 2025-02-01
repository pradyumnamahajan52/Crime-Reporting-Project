package site.crimereporting.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.UpdateTimestamp;

@Getter
@Setter
@ToString
public class BaseDTO {
	
	private Long id;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;

}

