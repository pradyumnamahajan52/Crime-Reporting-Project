package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import site.crimereporting.entity.User;

public interface UserDao extends JpaRepository<User, Long>{

}
