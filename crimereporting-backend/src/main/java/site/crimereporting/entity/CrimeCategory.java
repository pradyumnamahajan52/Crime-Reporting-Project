package site.crimereporting.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "crime_category")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class CrimeCategory extends BaseEntity {

	@Column(length = 50, nullable = false) // not null constraint
	private String category;

	@Column(name = "sub_category", length = 50, nullable = false) // not null constraint
	private String subCategory;
}
