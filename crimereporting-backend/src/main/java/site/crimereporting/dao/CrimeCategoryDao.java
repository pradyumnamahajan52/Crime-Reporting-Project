package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.PoliceStation;

import java.util.List;

public interface CrimeCategoryDao extends JpaRepository<CrimeCategory, Long> {
	
    List<CrimeCategory> findByIsDeletedFalse();
}
