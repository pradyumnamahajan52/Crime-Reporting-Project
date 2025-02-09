package site.crimereporting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.service.ReportService;

@RestController
@RequestMapping("/crimereport")
@CrossOrigin("*")
public class ReportController {

    @Autowired
    private ReportService reportService;
    


    @PostMapping("/newreport")
    public ResponseEntity<?> crimeReport(@ModelAttribute CrimeReportDTO crimeReportDTO){
    	try {
            return ResponseEntity.status(HttpStatus.CREATED).body(reportService.newReport(crimeReportDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
        }
    }
    
    @GetMapping("/reportstatus")
	public ResponseEntity<?> viewStatus() {
    	 try {
             return ResponseEntity.ok(reportService.getAllReportStatusById());
         } catch (Exception e) {
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
         }
	}
    
//    @PostMapping("/findNearByPoliceStation")
//    public ResponseEntity<?> findNearByPoliceStation(@RequestBody NearByPoliceStationDTO nearByPoliceStationDTO){
//
//
//
//		return null;
//
//    }
}
