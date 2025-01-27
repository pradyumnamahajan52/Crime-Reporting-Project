package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Feedback extends BaseEntity {

	@Column(name = "comments", length = 800, nullable = true) // not null constraint
	private String comments;

	@Column(name = "rating", nullable = false) // not null constraint
	private Short rating;

	// feedback * ---> 1 user
	// eager
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;

}
