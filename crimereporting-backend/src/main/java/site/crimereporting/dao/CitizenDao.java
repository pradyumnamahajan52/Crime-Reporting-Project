package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.User;

@Repository
public interface CitizenDao extends JpaRepository<Citizen, Long>{
	 Citizen findByUser(User user);
}
