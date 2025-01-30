package site.crimereporting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dao.AuditDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.AuditTrails;
import site.crimereporting.entity.Citizen;
import site.crimereporting.entity.PoliceStationUser;
import site.crimereporting.entity.User;

@Service
@Transactional
public class AuditServiceImpl implements AuditService {

	@Autowired
	private AuditDao auditDao;

	@Override
	public void citizenLogin(ApiResponse<Citizen> citizen) {
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
	public void policeLogin(ApiResponse<PoliceStationUser> police) {
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

}
