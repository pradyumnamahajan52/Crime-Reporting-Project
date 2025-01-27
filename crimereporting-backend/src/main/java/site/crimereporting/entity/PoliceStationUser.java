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

	// police Station user 1 ---> 1 user
	// eager
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	// police station user * <---> 1 police station
	// eager
	@ManyToOne
	@JoinColumn(name = "police_station_id")
	private PoliceStation policeStation;

	@Column(name = "is_verified", columnDefinition = "boolean default false")
	private Boolean isVerified;

}
