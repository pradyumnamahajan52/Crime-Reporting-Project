package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.User;

import java.util.Optional;

@Repository
public interface CitizenDao extends JpaRepository<Citizen, Long>{
	 Citizen findByUser(User user);


//	Optional<Citizen> findByEmail(String email);
	Optional<Citizen> findByUser_Email(String email);
}
