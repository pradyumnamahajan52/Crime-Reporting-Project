package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;

public interface AuditService {
	void citizenRegistration(ApiResponse<Citizen> citizen);
	
	void policeRegistration(ApiResponse<PoliceStationUser> police);
	
	void userLogin(ApiResponse<User> user);
	
}
