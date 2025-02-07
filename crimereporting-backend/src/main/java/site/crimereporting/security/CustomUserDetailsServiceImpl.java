package site.crimereporting.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import site.crimereporting.dao.UserDao;
import site.crimereporting.entity.User;

public class CustomUserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userDao.findByEmail(email)
				.orElseThrow(()-> new UsernameNotFoundException("Email not found !!!!"));
		return new CustomUserDetailsImpl(user);
	}

}
