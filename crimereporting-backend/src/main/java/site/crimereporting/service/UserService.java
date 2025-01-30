package site.crimereporting.service;

import java.io.IOException;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.AuthResponse;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;

public interface UserService {

	String generateOtp(String email);

	String verifyOtp(String email, String otp);

	AuthResponse signIn(AuthRequest dto);

	ApiResponse registerCitizen(CitizenRegisterRequestDTO citizen) throws IOException;
	
	ApiResponse registerPolice(PoliceRegisterRequestDTO police);


	Long getTotalUsers();

}
