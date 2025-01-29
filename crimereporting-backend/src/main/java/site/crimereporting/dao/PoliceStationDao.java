package site.crimereporting.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.PoliceStation;
import java.util.List;


@Repository
public interface PoliceStationDao extends JpaRepository<PoliceStation, Long> {

	Optional<PoliceStation> findByStationCode(Integer stationCode);
}
