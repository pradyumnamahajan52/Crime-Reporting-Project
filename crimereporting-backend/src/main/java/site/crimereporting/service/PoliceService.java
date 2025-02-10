package site.crimereporting.service;

import site.crimereporting.dtos.*;
import site.crimereporting.entity.CrimeCategory;

import java.io.IOException;
import java.util.List;

public interface PoliceService {

	ApiResponse getFeedbacks();
	
	ApiResponse getLoggedInPoliceDetails();

	ApiResponse<?> getAllReports(String email);

	List<CrimeCategory> getAllCrime();
}
