package site.crimereporting.service;

import java.util.List;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.PoliceStation;
import site.crimereporting.entity.User;

public interface AdminService {

	List<User> getAllUsers();
	
	List<PoliceStation> getAllPoliceStations();

	ApiResponse getFeedbacks();

	ApiResponse getAuditLogs();
}
