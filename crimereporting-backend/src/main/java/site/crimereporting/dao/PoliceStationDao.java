package site.crimereporting.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.PoliceStation;
import java.util.List;


@Repository
public interface PoliceStationDao extends JpaRepository<PoliceStation, Long> {

	Optional<PoliceStation> findByStationCode(Integer stationCode);
	long countByIsDeletedFalse();
	
	@Query(value = " SELECT * FROM police_station p JOIN address a ON p.address_id = a.id ORDER BY (6371 * ACOS( COS(RADIANS(:crimeLatitude)) * COS(RADIANS(a.latitude)) * COS(RADIANS(a.longitude) - RADIANS(:crimeLongitude)) + SIN(RADIANS(:crimeLatitude)) * SIN(RADIANS(a.latitude)) )) ASC LIMIT 3 ", nativeQuery = true) 
	PoliceStation findNearestPoliceStation(@Param("crimeLatitude") double crimeLat, @Param("crimeLongitude") double crimeLon); 

}
