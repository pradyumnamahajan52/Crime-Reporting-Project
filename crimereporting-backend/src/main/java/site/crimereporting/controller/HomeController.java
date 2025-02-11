package site.crimereporting.controller;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import site.crimereporting.dao.PoliceStationDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.OtpRequest;

@RestController
public class HomeController {



    @Autowired
    private PoliceStationDao policeStationDao;

    @GetMapping
    public ResponseEntity<?> renderHome() {
//    	User user = new User();
//    	user.getEmail();
        HashMap<String, Object> hashmap = new HashMap<>();
        List<String> authors = Arrays.asList("Lalini Shau","Pradyumna Mahajan" , "Jasmine Kispott", "Pawan Gupta","Mitali Gupta");
        hashmap.put("Authors", authors);
        hashmap.put("Project Name","Crime Reporting System");
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse<>("Project is Working! This message is from project creator", hashmap));
    }
    
   

}
