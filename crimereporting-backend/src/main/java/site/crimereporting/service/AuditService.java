package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.dtos.RegisterResponseDTO;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;

public interface AuditService {
	void citizenRegistration(ApiResponse<RegisterResponseDTO> citizen);
	
//	void policeRegistration(ApiResponse<RegisterResponseDTO> police);
	
	void userLogin(ApiResponse<User> user);

	void newCrimeReport(ApiResponse<CrimeReportResponseDTO> returnedCrimeReport);
	
}
