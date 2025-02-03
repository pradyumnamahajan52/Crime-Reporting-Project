package site.crimereporting.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.FeedbackDao;
import site.crimereporting.dao.UserDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuditTrailsResponse;
import site.crimereporting.dtos.FeedbackResponse;
import site.crimereporting.entity.User;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private AuditDao auditDao;

	@Autowired
	private FeedbackDao feedbackDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

	@Override
	public ApiResponse getFeedbacks() {
		List<FeedbackResponse> feedbackResponseList = feedbackDao.findAll().stream().map(feedback -> {
			FeedbackResponse response = mapper.map(feedback, FeedbackResponse.class);
			response.setEmail(feedback.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse("feedback retrieved successfully", feedbackResponseList);
	}

	@Override
	public ApiResponse getAuditLogs() {
		List<AuditTrailsResponse> auditLogs = auditDao.findAll().stream().map(audit -> {
			AuditTrailsResponse response = mapper.map(audit, AuditTrailsResponse.class);
			response.setEmail(audit.getUser().getEmail()); // we need only user email
			return response;
		}).collect(Collectors.toList());

		return new ApiResponse("Audit logs retrieved successfully", auditLogs);
	}

}
