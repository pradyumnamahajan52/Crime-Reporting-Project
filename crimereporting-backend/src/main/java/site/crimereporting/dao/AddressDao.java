package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import site.crimereporting.entity.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Long> {

}
