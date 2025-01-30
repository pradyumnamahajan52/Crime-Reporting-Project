package site.crimereporting.utils;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.service.AuditService;
import site.crimereporting.service.AuditServiceImpl;

@Aspect
@Component
public class AuditTrailAspect {
	
	@Autowired
	private AuditService auditService;
	
    @AfterReturning(value = "execution(* site.crimereporting.service.UserServiceImpl.registerCitizen(..))", returning = "returnedCitizen")
	public void citizenLoginTrail(JoinPoint joinPoint, ApiResponse<Citizen> returnedCitizen) {
		auditService.citizenLogin(returnedCitizen);
	}
    
    @AfterReturning(value = "execution(* site.crimereporting.service.UserServiceImpl.registerPolice(..))", returning = "returnedPolice")
	public void PoliceLoginTrail(JoinPoint joinPoint, ApiResponse<PoliceStationUser> returnedPolice) {
		auditService.policeLogin(returnedPolice);
	}
}
