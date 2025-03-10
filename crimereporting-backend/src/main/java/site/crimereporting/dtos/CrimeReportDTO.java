package site.crimereporting.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CrimeReportDTO {

    private Long crimeCategoryId;

    private String description;

    private LocalDate crimeDate;
    //from address
    private String addressLine1;

    private String addressLine2;

    private String city;

    private String state;

    private String country;

    private String pinCode;

    private Double latitude;

    private Double longitude;

    private MultipartFile[] evidences;
}
