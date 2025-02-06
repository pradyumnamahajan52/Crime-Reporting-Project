package site.crimereporting.service;

import java.util.List;

import site.crimereporting.dtos.AdminUserDTO;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.CrimeCategory;
import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.User;

public interface AdminService {

	List<User> getAllUsers();

	ApiResponse getDashboardDetails();

	ApiResponse getLoggedInUserDetails();

	ApiResponse updateLoggedInUserDetails(AdminUserDTO adminUserDTO);

	List<CrimeReports> getAllReports();
	
	List<CrimeCategory> getAllCrime();
	
	List<PoliceStation> getAllPoliceStations();

	ApiResponse getFeedbacks();

	ApiResponse getAuditLogs();
}
