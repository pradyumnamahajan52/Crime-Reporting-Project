package site.crimereporting.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.CrimeReports;

@Repository
public interface CrimeReportsDao extends JpaRepository<CrimeReports, Long> {
    long countByIsDeletedFalse();
    List<CrimeReports> findByCitizen(Citizen citizen);

}
