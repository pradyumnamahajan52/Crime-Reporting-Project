package site.crimereporting.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import site.crimereporting.dtos.TestDto;
import site.crimereporting.entity.PoliceStation;
import java.util.List;


@Repository
public interface PoliceStationDao extends JpaRepository<PoliceStation, Long> {

	Optional<PoliceStation> findByStationCode(Integer stationCode);
	long countByIsDeletedFalse();

	@Procedure(procedureName = "GetNearestPoliceStations")
	List<TestDto> getNearestPoliceStations(
			@Param("crimeLatitude") double crimeLatitude,
			@Param("crimeLongitude") double crimeLongitude,
			@Param("limitCount") int limitCount
	);

}
