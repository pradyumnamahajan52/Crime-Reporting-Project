package site.crimereporting.dtos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import site.crimereporting.entity.Address;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.Status;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class CrimeReportResponseDTO {
    private String description;


    private CrimeCategory crimeCategory;

    private LocalDate crimeDate;


    private Status reportStatus;

    //from address
    private String addressLine1;

    private String addressLine2;

    private String city;

    private String state;

    private String country;

    private String pinCode;

    private String stationName;

}
