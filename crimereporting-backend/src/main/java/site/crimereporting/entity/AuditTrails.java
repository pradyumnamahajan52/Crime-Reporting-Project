package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Table(name = "audit_trails")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class AuditTrails extends BaseEntity {

	@Column(name = "message", length = 1200, nullable = true) // not null constraint
	private String message;

	// audit * ---> 1 User
//	@ManyToOne(cascade = CascadeType.ALL) // Updated OneToOne to ManyToOne 
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

}
