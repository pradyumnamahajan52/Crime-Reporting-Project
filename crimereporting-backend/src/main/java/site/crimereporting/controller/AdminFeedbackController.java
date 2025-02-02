package site.crimereporting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.crimereporting.service.AdminFeedbackService;


@RestController
    @RequestMapping("/admin/feedback")
@CrossOrigin("*")
public class AdminFeedbackController {

    @Autowired
    private AdminFeedbackService adminFeedbackService;

    @GetMapping
    public ResponseEntity<?> renderAdminAuditLog() {
        return ResponseEntity.status(HttpStatus.OK).body(adminFeedbackService.getFeedbacks());
    }

}
