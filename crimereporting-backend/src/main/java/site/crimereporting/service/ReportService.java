package site.crimereporting.service;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;

public interface ReportService {

    ApiResponse<?> newReport(CrimeReportDTO crimereport);

}
