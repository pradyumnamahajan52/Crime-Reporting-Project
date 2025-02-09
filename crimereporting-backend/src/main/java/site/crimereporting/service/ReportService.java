package site.crimereporting.service;

import org.springframework.web.bind.annotation.RequestParam;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;

public interface ReportService {

    ApiResponse<?> newReport(CrimeReportDTO crimereport);
    ApiResponse<?> crimeReportUpdatePoliceStation(Long crimeReportId, Long policeStationId);
    ApiResponse<?> getReportsEvidence(Long crimeReportId);
	ApiResponse<?> getReportDetails(Long crimeReportId);
}
