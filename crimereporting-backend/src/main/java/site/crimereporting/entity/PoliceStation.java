package site.crimereporting.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "police_station")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = { "policeStationUserList" })
public class PoliceStation extends BaseEntity {

	@Column(name = "station_code", unique = true, nullable = false) // not null constraint
	private Integer stationCode;

	@Column(name = "station_name", length = 100, nullable = false) // not null constraint
	private String stationName;

	// police station 1 ---> 1 address
	// eager
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "address_id", nullable = false)
	private Address address;

	// police station 1 <---> * policeStation List
	// lazy
	@OneToMany(mappedBy = "policeStation", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<PoliceStationUser> policeStationUserList = new ArrayList<>();

	
	 public void addPoliceStationUser(PoliceStationUser user) {
	        policeStationUserList.add(user);
	        user.setPoliceStation(this);
	    }

	    public void removePoliceStationUser(PoliceStationUser user) {
	        policeStationUserList.remove(user);
	        user.setPoliceStation(null);
	    }
}
