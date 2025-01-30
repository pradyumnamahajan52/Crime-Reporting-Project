package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import site.crimereporting.entity.AuditTrails;

public interface AuditDao extends JpaRepository<AuditTrails, Long> {

}
