package site.crimereporting.Service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.UserRequestDTO;
import site.crimereporting.entity.User;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	public ApiResponse registeruser(UserRequestDTO user) {
		
		User requser =  mapper.map(user, User.class);
		
		User persistentUser =  userDao.save(requser);
		
		if(persistentUser.getId() == null)
			throw new ApiException("user registration failed!");
			
		return new ApiResponse<User>("user registered successfully!" , persistentUser);
		
	}
}
