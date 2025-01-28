package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.UserRequestDTO;

public interface UserService {
	public ApiResponse registeruser(UserRequestDTO user);
	
}
