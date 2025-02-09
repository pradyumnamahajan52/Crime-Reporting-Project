package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.Evidence;

import java.util.List;

@Repository
public interface EvidenceDao extends JpaRepository<Evidence, Long> {
      List<Evidence> findByCrimeReports_Id(Long crimeReportId);
}
