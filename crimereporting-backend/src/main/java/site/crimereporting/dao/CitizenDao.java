package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Citizen;

@Repository
public interface CitizenDao extends JpaRepository<Citizen, Long>{
	
}
