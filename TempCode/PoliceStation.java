package site.crimereporting.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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

//    @Column(name="address", length = 250, nullable = false) // not null constraint
//    private String address;

//    @Column(length = 6, nullable =false) // not null constraint
//    private String pincode;

//    @Column(length = 10, nullable =true) // not null constraint
//    private String latitude;
//
//    @Column(length = 10, nullable =true) // not null constraint
//    private String longitude;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="address_id")
    private Address address;
   
    
    @OneToMany(mappedBy = "policeStation",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
//	@JsonIgnore
    private List<PoliceStationUser> policeStationUserList = new ArrayList<>();

}
