package site.crimereporting.dtos;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import site.crimereporting.entity.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminCrimeReportDTO {

    private AdminCrimeReportCitizenDTO citizen;

    private String description;

    private CrimeCategory crimeCategory;

     private LocalDate crimeDate;

     private Address address;

     private Status reportStatus;

    private PoliceStation policeStation;

}
