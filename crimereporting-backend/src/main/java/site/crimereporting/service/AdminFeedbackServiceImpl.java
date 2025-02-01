package site.crimereporting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.FeedbackDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuditTrailsResponse;
import site.crimereporting.dtos.FeedbackResponse;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AdminFeedbackServiceImpl implements AdminFeedbackService {

    @Autowired
    private FeedbackDao feedbackDao;

    @Autowired
    private ModelMapper mapper;


    @Override
    public ApiResponse getFeedbacks() {
        List<FeedbackResponse> feedbackResponseList = feedbackDao.findAll()
                .stream()
                .map(feedback -> {
                    FeedbackResponse response = mapper.map(feedback, FeedbackResponse.class);
                    response.setEmail(feedback.getUser().getEmail()); // we need only user email
                    return response;
                })
                .collect(Collectors.toList());

        return new ApiResponse("feedback retrieved successfully", feedbackResponseList);
    }
}
