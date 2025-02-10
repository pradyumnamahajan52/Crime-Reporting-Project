package site.crimereporting.service;

import site.crimereporting.dtos.*;

import java.io.IOException;

public interface PoliceService {

	ApiResponse getFeedbacks();
	
	ApiResponse getLoggedInPoliceDetails();

	ApiResponse<?> getAllReports(String email);
}
