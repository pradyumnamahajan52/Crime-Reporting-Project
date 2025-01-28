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
	@Column(length = 20, name = "pin_code")
	private String pinCode;

	@Column(length = 10, nullable = true) // not null constraint
	private String latitude;

	@Column(length = 10, nullable = true) // not null constraint
	private String longitude;

//	public Address(String adrLine1, String adrLine2, String city, String state, String country, String zipCode) {
//		super();
//		this.adrLine1 = adrLine1;
//		this.adrLine2 = adrLine2;
//		this.city = city;
//		this.state = state;
//		this.country = country;
//		this.zipCode = zipCode;
//	}

}
