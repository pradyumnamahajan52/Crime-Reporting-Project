package site.crimereporting.dtos;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.AadhaarCard;
import site.crimereporting.entity.Address;
import site.crimereporting.entity.User;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminCrimeReportCitizenDTO {

    private LocalDate dateOfBirth;

     private AdminCrimeReportUserDTO user;


}
