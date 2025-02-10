package site.crimereporting.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.PoliceStation;

import java.util.List;

@Repository
public interface CrimeReportsDao extends JpaRepository<CrimeReports, Long> {
    long countByIsDeletedFalse();

    List<CrimeReports> findByIsDeletedFalse();

    List<CrimeReports> findByCitizen(Citizen citizen);

//    @Query(value="select * from crime_reports where police_station_id = ?", nativeQuery = true )
//    List<CrimeReports> getCrimeReports(Long police_station_id);
    
    @Query(value = "SELECT cr FROM CrimeReports cr JOIN cr.policeStation ps JOIN ps.policeStationUserList psu WHERE psu.user.email = :email")
    List<CrimeReports> getCrimeReports(String email);
    

}
