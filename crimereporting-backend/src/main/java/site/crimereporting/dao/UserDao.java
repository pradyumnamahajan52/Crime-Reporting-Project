package site.crimereporting.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, Long>{

	Optional<User> findByEmail(String email);
	Optional<User> findByEmailAndOtp(String email, String otp);

	List<User> findByIsDeletedFalse();

	long countByIsDeletedFalse();

	void save(Optional<User> user);

}
