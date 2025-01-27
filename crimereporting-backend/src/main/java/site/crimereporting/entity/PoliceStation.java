package site.crimereporting.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="police_station")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class PoliceStation extends BaseEntity{

    @Column(name="station_code", unique = true ,nullable = false) // not null constraint
    private Integer stationCode;

    @Column(name="station_name", length = 100, nullable = false) // not null constraint
    private String stationName;

    @Column(name="address", length = 250, nullable = false) // not null constraint
    private String address;

    @Column(length = 6, nullable =false) // not null constraint
    private String pincode;

    @Column(length = 10, nullable =true) // not null constraint
    private String latitude;

    @Column(length = 10, nullable =true) // not null constraint
    private String longitude;

    @OneToMany(mappedBy = "policeStation",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
//	@JsonIgnore
    private List<PoliceStationUser> policeStationUserList = new ArrayList<>();

}
