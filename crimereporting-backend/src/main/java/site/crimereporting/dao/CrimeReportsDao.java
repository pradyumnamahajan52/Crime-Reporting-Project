package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.PoliceStation;

import java.util.List;

@Repository
public interface CrimeReportsDao extends JpaRepository<CrimeReports, Long> {
    long countByIsDeletedFalse();
    List<CrimeReports> findByIsDeletedFalse();
}
