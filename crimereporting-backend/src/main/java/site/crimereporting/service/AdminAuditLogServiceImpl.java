package site.crimereporting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;
import site.crimereporting.dao.AuditDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.AuditTrailsResponse;
import site.crimereporting.entity.AuditTrails;
import site.crimereporting.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AdminAuditLogServiceImpl implements AdminAuditLogService {

    @Autowired
    private AuditDao auditDao;

    @Autowired
    private ModelMapper mapper;

    @Override
    public ApiResponse getAuditLogs() {
        List<AuditTrailsResponse> auditLogs = auditDao.findAll()
                .stream()
                .map(audit -> {
                    AuditTrailsResponse response = mapper.map(audit, AuditTrailsResponse.class);
                    response.setEmail(audit.getUser().getEmail()); // we need only user email
                    return response;
                })
                .collect(Collectors.toList());

        return new ApiResponse("Audit logs retrieved successfully", auditLogs);
    }
}
