package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.AadhaarCard;

@Repository
public interface AadhaarCardDao extends JpaRepository<AadhaarCard, Long> {

}
