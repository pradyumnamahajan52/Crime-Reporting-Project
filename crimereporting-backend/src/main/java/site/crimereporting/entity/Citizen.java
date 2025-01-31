package site.crimereporting.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "citizen")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Citizen extends BaseEntity {

	@Column(name = "full_name", length = 100, nullable = false) // not null constraint
	private String fullName;

	@Column(name = "date_of_birth", nullable = true)
	private LocalDate dateOfBirth;

	// citizen 1 --->1 user
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

	// eager
	// citizen 1 ---> 1 aadhaarCard
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "aadhaar_card_id")
	private AadhaarCard aadhaarCard;

	// eager
	// citizen 1 ---> 1address
//	@OneToOne
//	@JoinColumn(name = "address_id")
//	private List<Address> address = new ArrayList<Address>();
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", nullable = false)
	private Address address;

}
