package site.crimereporting.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "evidence")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "crimeReports" })
public class Evidence extends BaseEntity {

	// evidence * <---> 1 crimeReports
	@ManyToOne
	@JoinColumn(name = "crime_report_id", nullable = false)
	private CrimeReports crimeReports;

	@Column(name = "file_url", length = 2048, nullable = false) // not null constraint
	private String fileUrl;

	@Column(name = "file_type", length = 100, nullable = false) // not null constraint
	private String fileType;

}
