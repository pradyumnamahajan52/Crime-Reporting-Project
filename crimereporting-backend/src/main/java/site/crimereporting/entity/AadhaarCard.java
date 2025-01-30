package site.crimereporting.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "aadhaar_card")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true, exclude = { "image" })
public class AadhaarCard extends BaseEntity {
	@Column(name = "card_no", length = 14, unique = true)
	private String cardNumber;

	@Lob
<<<<<<< HEAD
	@Column(columnDefinition = "LONGBLOB", nullable= false)
=======
	@Column(columnDefinition = "LONGBLOB" , nullable = false)
>>>>>>> 2802963cab1c293d940f05bbcb000e1e0b3f84e4
	private byte[] image;

}
