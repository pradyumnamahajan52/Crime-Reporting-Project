package site.crimereporting.service;

import java.util.List;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.CrimeReportStatusDTO;

public interface ReportService {

	ApiResponse<?> newReport(CrimeReportDTO crimereport);

	List<CrimeReportStatusDTO> getAllReportStatusById();
}
