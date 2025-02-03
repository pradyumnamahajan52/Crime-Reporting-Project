package site.crimereporting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dao.UserDao;
import site.crimereporting.entity.User;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

}
