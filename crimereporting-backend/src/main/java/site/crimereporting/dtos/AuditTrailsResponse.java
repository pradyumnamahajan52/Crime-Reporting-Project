package site.crimereporting.dtos;

import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.User;

@ToString(callSuper = true)
@Getter
@Setter
public class AuditTrailsResponse extends BaseDTO {

    private String message;
    private String email;

}
