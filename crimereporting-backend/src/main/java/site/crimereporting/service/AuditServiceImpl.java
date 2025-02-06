package site.crimereporting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.CitizenDao;
import site.crimereporting.dao.PoliceStationUserDao;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.dtos.RegisterResponseDTO;
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

	@Autowired
	private UserDao userDao;

	@Override
	public void citizenRegistration(ApiResponse<RegisterResponseDTO> user) {
		RegisterResponseDTO gotCitizen = user.getData();

		AuditTrails auditTrails = new AuditTrails();

		User registereduser = userDao.findByEmail(gotCitizen.getEmail()).orElse(null);
		// setting user

		if (registereduser != null)
			auditTrails.setUser(registereduser);

		// setting message
		String message = registereduser.getRole() + " " + registereduser.getFullName() + " registered";
		auditTrails.setMessage(message.toUpperCase());

		System.out.println(message.toUpperCase());
		auditDao.save(auditTrails);
	}

//	@Override
//	public void policeRegistration(ApiResponse<PoliceStationUser> police) {
//		PoliceStationUser gotPolice = police.getData();
//
//		AuditTrails auditTrails = new AuditTrails();
//
//		User user = gotPolice.getUser();
//
//		// setting user
//		auditTrails.setUser(user);
//
//		// setting message
//		String message = user.getRole() + " " + user.getFullName() + " registered";
//		auditTrails.setMessage(message.toUpperCase());
//
//		System.out.println(message.toUpperCase());
//		auditDao.save(auditTrails);
//	}

	@Override
	public void userLogin(ApiResponse<User> user) {
		if (user == null || user.getData() == null) {
			System.out.println("Invalid user login attempt.");
			return;
		}

		System.out.println("User login method called."); // Check if the method is invoked

		User userData = user.getData();
//		String username = "Unknown User"; // Default fallback username

		// Fetch Citizen or PoliceStationUser based on User reference
//		Citizen citizen = citizenDao.findByUser(userData);
//		PoliceStationUser policeUser = policeStationUserDao.findByUser(userData);

//		if (citizen != null) {
//			username = citizen.getFullName();
//		} else if (policeUser != null) {
//			username = policeUser.getName();
//		}

		AuditTrails auditTrails = new AuditTrails();
		auditTrails.setUser(userData);

		// Setting message
		String message = userData.getRole() + " " + userData.getFullName() + " logged in";
		auditTrails.setMessage(message.toUpperCase());

		System.out.println(message.toUpperCase());
		auditDao.save(auditTrails);
		System.out.println("Audit log saved: " + auditTrails.getMessage());
	}

	@Override
	public void newCrimeReport(ApiResponse<CrimeReportResponseDTO> returnedCrimeReport) {
		CrimeReportResponseDTO crimeReportResponseDTO = returnedCrimeReport.getData();

		AuditTrails auditTrails = new AuditTrails();

		Citizen citizen = citizenDao.findById(crimeReportResponseDTO.getCitizenId()).orElse(null);

		User user = null;
		if (citizen != null) {
			user = userDao.findById(citizen.getUser().getId()).orElse(null);
		}

		if (user != null)
			auditTrails.setUser(user);

		// setting message
		String message = user.getRole() + " " + user.getFullName() + " reported a crime";
		auditTrails.setMessage(message.toUpperCase());

		System.out.println(message.toUpperCase());
		auditDao.save(auditTrails);

	}

}
