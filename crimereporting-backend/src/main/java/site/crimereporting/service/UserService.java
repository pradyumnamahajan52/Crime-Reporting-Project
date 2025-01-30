package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuthRequest;
import site.crimereporting.dtos.AuthResponse;
import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.PoliceRegisterRequestDTO;

public interface UserService {

	String generateOtp(String email);

	String verifyOtp(String email, String otp);

	AuthResponse signIn(AuthRequest dto);

	ApiResponse registerCitizen(CitizenRegisterRequestDTO citizen);

	ApiResponse registerPolice(PoliceRegisterRequestDTO police);
}
