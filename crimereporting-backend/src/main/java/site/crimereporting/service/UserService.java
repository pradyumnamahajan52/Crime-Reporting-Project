package site.crimereporting.service;

import java.io.IOException;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;

public interface UserService {
	 ApiResponse registerCitizen(CitizenRegisterRequestDTO citizen) throws IOException;
	
	 ApiResponse registerPolice(PoliceRegisterRequestDTO police);
}
