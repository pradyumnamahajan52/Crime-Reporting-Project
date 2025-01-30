package site.crimereporting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.CitizenDao;
import site.crimereporting.dao.PoliceStationUserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.AuditTrails;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;

@Service
@Transactional
public class AuditServiceImpl implements AuditService {

	@Autowired
	private CitizenDao citizenDao;
	
	@Autowired
	private PoliceStationUserDao policeStationUserDao;
	
	@Autowired
	private AuditDao auditDao;

	@Override
	public void citizenRegistration(ApiResponse<Citizen> citizen) {
		Citizen gotCitizen = citizen.getData();

		AuditTrails auditTrails = new AuditTrails();

		User user = gotCitizen.getUser();
		// setting user

		if (user != null)
			auditTrails.setUser(user);

		// setting message
		String message = user.getRole() + " " + gotCitizen.getFullName() + " registered";
		auditTrails.setMessage(message.toUpperCase());

		System.out.println(message.toUpperCase());
		auditDao.save(auditTrails);
	}

	@Override
	public void policeRegistration(ApiResponse<PoliceStationUser> police) {
		PoliceStationUser gotPolice = police.getData();

		AuditTrails auditTrails = new AuditTrails();

		User user = gotPolice.getUser();

		// setting user
		auditTrails.setUser(user);

		// setting message
		String message = user.getRole() + " " + gotPolice.getName() + " registered";
		auditTrails.setMessage(message.toUpperCase());

		System.out.println(message.toUpperCase());
		auditDao.save(auditTrails);
	}

//	@Override
//	public void userLogin(ApiResponse<User> user) {
//		User userData = user.getData();
//
//		AuditTrails auditTrails = new AuditTrails();
//
//
//		// setting user
//		auditTrails.setUser(userData);
//
//		// setting message
//		String message = userData.getRole() + " " + " registered";
//		auditTrails.setMessage(message.toUpperCase());
//
//		System.out.println(message.toUpperCase());
//		auditDao.save(auditTrails);
//		
//	}
	
	
	@Override
	public void userLogin(ApiResponse<User> user) {
	    if (user == null || user.getData() == null) {
	        System.out.println("Invalid user login attempt.");
	        return;
	    }

	    System.out.println("User login method called.");  // Check if the method is invoked

	    User userData = user.getData();
	    String username = "Unknown User"; // Default fallback username

	    // Fetch Citizen or PoliceStationUser based on User reference
	    Citizen citizen = citizenDao.findByUser(userData);
	    PoliceStationUser policeUser = policeStationUserDao.findByUser(userData);

	    if (citizen != null) {
	        username = citizen.getFullName();
	    } else if (policeUser != null) {
	        username = policeUser.getName();
	    }

	    AuditTrails auditTrails = new AuditTrails();
	    auditTrails.setUser(userData);

	    // Setting message
	    String message = userData.getRole() + " " + username + " logged in";
	    auditTrails.setMessage(message.toUpperCase());

	    System.out.println(message.toUpperCase());
	    auditDao.save(auditTrails);
	    System.out.println("Audit log saved: " + auditTrails.getMessage());
	}



}
