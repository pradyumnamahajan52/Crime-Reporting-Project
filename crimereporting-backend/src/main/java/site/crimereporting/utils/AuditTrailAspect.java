package site.crimereporting.utils;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;
import site.crimereporting.service.AuditService;
import site.crimereporting.service.AuditServiceImpl;

@Aspect
@Component
public class AuditTrailAspect {

	@Autowired
	private AuditService auditService;

	@AfterReturning(value = "execution(* site.crimereporting.service.UserServiceImpl.registerCitizen(..))", returning = "returnedCitizen")
	public void citizenRegisterTrail(JoinPoint joinPoint, ApiResponse<Citizen> returnedCitizen) {
		auditService.citizenRegistration(returnedCitizen);
	}

	@AfterReturning(value = "execution(* site.crimereporting.service.UserServiceImpl.registerPolice(..))", returning = "returnedPolice")
	public void PoliceRegisterTrail(JoinPoint joinPoint, ApiResponse<PoliceStationUser> returnedPolice) {
		auditService.policeRegistration(returnedPolice);
	}

	@AfterReturning(value = "execution(* site.crimereporting.service.UserServiceImpl.verifyOtp(..))", returning = "returnedUser")
	public void afterVerifyOtp(JoinPoint joinPoint, ApiResponse<User> returnedUser) {
		if (returnedUser != null && returnedUser.getData() != null) {
			auditService.userLogin(returnedUser);
		}
	}
}
