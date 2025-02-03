package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.entity.User;

public interface AdminAuditLogService {
    ApiResponse getAuditLogs();
}
