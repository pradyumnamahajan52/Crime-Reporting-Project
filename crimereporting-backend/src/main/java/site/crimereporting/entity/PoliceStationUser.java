package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "police_station_user")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "policeStation" })
public class PoliceStationUser extends BaseEntity {
	
	@Column(name = "name", length = 100, nullable = false) // not null constraint
	private String name;
	
	@Column(length = 100, nullable = false)
	private String designation;

	// police Station user 1 ---> 1 user
	// eager
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	// police station user * <---> 1 police station
	// eager
	@ManyToOne
	@JoinColumn(name = "police_station_id", nullable=false)
	private PoliceStation policeStation;

	@Column(name = "is_verified", columnDefinition = "boolean default false")
	private Boolean isVerified = false;

}
