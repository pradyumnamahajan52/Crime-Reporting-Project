package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;

public interface UserService {
	 ApiResponse registerCitizen(CitizenRegisterRequestDTO citizen);
	
	 ApiResponse registerPolice(PoliceRegisterRequestDTO police);
}
