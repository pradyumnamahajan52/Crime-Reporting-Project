package site.crimereporting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.service.AdminAuditLogService;


import java.util.Arrays;
import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping("/admin/auditlog")
@CrossOrigin("*")
public class AdminAuditLogController {

    @Autowired
    private AdminAuditLogService adminAuditLogService;

    @GetMapping
    public ResponseEntity<?> renderAdminAuditLog() {
        return ResponseEntity.status(HttpStatus.OK).body(adminAuditLogService.getAuditLogs());
    }

}
