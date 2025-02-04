package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import site.crimereporting.entity.CrimeCategory;

public interface CrimeCategoryDao extends JpaRepository<CrimeCategory, Long> {

}
