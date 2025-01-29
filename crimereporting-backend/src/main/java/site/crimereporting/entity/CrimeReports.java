package site.crimereporting.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "crime_reports")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "evidenceList" })
public class CrimeReports extends BaseEntity {

	//only citizen can report
//	@ManyToOne
//	@JoinColumn(name = "user_id")
//	private User user;
	
	@ManyToOne
	@JoinColumn(name = "citizen_id")
	private Citizen citizen;

	@Column(name = "description", length = 1200, nullable = true) // not null constraint
	private String description;

	// crime report 1 ---> 1 crimeCategory
	@OneToOne // eager
	@JoinColumn(name = "crime_category_id")
	private CrimeCategory crimeCategory;

	@Column(name = "crime_date", nullable = true)
	private LocalDate crimeDate;

	@Enumerated(EnumType.STRING)
	@Column(length = 30, name = "report_status")
	private Status reportStatus;

	// crime reports 1--->1 address
	// eager
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	// crime reports * --> 1 police station
	// eager
	@ManyToOne(optional = true)
	@JoinColumn(name = "police_station_id", nullable = true)
	private PoliceStation policeStation;

	// crime reports 1 --> *
	// eager
	@OneToMany(mappedBy = "crimeReports", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
//	@JsonIgnore
	private List<Evidence> evidenceList = new ArrayList<>();
}
