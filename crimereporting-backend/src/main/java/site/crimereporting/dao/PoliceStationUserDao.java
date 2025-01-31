package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;

@Repository
public interface PoliceStationUserDao extends JpaRepository<PoliceStationUser, Long> {
	 PoliceStationUser findByUser(User user);
}
