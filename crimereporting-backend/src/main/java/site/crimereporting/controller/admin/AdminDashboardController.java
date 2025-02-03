package site.crimereporting.controller.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.service.AdminService;
import site.crimereporting.service.UserService;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminDashboardController {
	
	@Autowired
	private AdminService adminService;

    @GetMapping
    public ResponseEntity<?> renderAdminHome() {

        HashMap<String, Object> hashmap = new HashMap<>();
        List<String> authors = Arrays.asList("Lalini Sahu","Pradyumna Mahajan" , "Jasmine Kispott", "Pawan Gupta","Mitali Gupta");
        hashmap.put("Authors", authors);
        hashmap.put("Project Name","Crime Reporting System");
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>("Project is Working! This message is from project creator", hashmap));
    }


    
    @GetMapping("/users")
	public ResponseEntity<?> viewUsers() {
		return ResponseEntity.ok
				(adminService.getAllUsers());
	}
}
