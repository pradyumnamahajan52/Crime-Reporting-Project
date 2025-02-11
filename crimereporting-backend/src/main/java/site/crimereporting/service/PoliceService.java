package site.crimereporting.service;

import site.crimereporting.dtos.*;
import site.crimereporting.entity.CrimeCategory;

import java.io.IOException;
import java.util.List;

import jakarta.validation.Valid;

public interface PoliceService {

	ApiResponse getFeedbacks();
	
	ApiResponse getLoggedInPoliceDetails();

	ApiResponse<?> getAllReports(String email);

	List<CrimeCategory> getAllCrime();

	ApiResponse<?>  updateUserDetails(PoliceUserDTO policeUserDTO);
	
	ApiResponse<?>  newCrimeCategoryDetails(CrimeCategoryRequestDTO crimeCategoryRequestDTO);
	
	ApiResponse<?>  updateLoggedInUserDetails(PoliceUserDTO policeUserDTO);
}
