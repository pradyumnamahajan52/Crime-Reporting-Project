package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;

public interface AuditService {
	void citizenLogin(ApiResponse<Citizen> citizen);
	
	void policeLogin(ApiResponse<PoliceStationUser> police);
}
