package site.crimereporting.dtos;


import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;
import site.crimereporting.entity.UserRole;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CitizenDTO{
    private String fullName;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String country;
    private String pinCode;
}
