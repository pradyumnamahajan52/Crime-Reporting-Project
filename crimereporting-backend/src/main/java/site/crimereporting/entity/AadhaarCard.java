package site.crimereporting.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@ToString(callSuper = true)
public class AadhaarCard extends BaseEntity {
	@Column(name = "card_no", length = 14, unique = true)
	private String cardNumber;

	/**
	 * Changed from byte[] to String to store file path
	 * This stores relative path like "aadhaar/uuid.jpg"
	 * Files are stored in local filesystem instead of database
	 */
	@Column(name = "image_path", length = 500, nullable = false)
	private String imagePath;

	// Note: If you need backward compatibility with old byte[] data,
	// you can add a migration script to extract existing images to files
}