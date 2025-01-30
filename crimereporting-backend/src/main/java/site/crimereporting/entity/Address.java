package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Address extends BaseEntity {
	@Column(name = "address_line1", length = 100)
	private String addressLine1;
	@Column(name = "address_line2", length = 100)
	private String addressLine2;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;
	@Column(length = 7, name = "pin_code")
	private String pinCode;

	@Column(nullable = true) // not null constraint
	private Double latitude;

	@Column(nullable = true) // not null constraint
	private Double longitude;

// as suggested by chatgpt address *<--->1 citizen
//	@ManyToOne
//	@JoinColumn(name="citizen_id", nullable=false)
//	private Citizen citizen;

}
