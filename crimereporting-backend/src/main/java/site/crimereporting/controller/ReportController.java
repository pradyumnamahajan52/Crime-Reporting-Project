package site.crimereporting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.service.ReportService;

@RestController
@RequestMapping("/crimereport")
@CrossOrigin("*")
public class ReportController {

    @Autowired
    private ReportService reportService;
    


    @PostMapping("/newreport")
    public ResponseEntity<?> crimeReport(@ModelAttribute CrimeReportDTO crimeReportDTO){
        System.out.println(crimeReportDTO);
//        System.out.println(crimereport.getEvidences());
        return ResponseEntity.status(HttpStatus.CREATED).body(reportService.newReport(crimeReportDTO));

    }

    @PostMapping("/update-police-station ")
    public ResponseEntity<?> crimeReportUpdatePoliceStation(@RequestParam("crimeReportId") Long crimeReportId,
                                                             @RequestParam("policeStationId") Long policeStationId){
        System.out.println(crimeReportId);
        System.out.println(policeStationId);
        return ResponseEntity.status(HttpStatus.CREATED).body(reportService.crimeReportUpdatePoliceStation(crimeReportId,policeStationId));

    }

    @PostMapping("/get-evidence")
    public ResponseEntity<?> getReportsEvidence(@RequestParam("crimeReportId") Long crimeReportId){
        System.out.println(crimeReportId);
        return ResponseEntity.status(HttpStatus.CREATED).body(reportService.getReportsEvidence(crimeReportId));

    }


}
