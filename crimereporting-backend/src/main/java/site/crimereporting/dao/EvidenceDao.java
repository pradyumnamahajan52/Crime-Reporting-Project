package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Evidence;

@Repository
public interface EvidenceDao extends JpaRepository<Evidence, Long> {

}
