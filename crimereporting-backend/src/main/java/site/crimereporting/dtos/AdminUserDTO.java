package site.crimereporting.dtos;


import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminUserDTO {

    private String email;

    @NotBlank(message = "Full Name must be not null and not blank !!")
    private String fullName;



    private String phoneNumber;
}
