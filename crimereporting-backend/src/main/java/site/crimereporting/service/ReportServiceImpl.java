package site.crimereporting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import site.crimereporting.custom_exception.ImageUploadException;
import site.crimereporting.dao.AuditDao;
import site.crimereporting.dao.CrimeReportsDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.entity.CrimeReports;

import java.util.Collections;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {

    @Autowired
    private CrimeReportsDao crimeReportsDao;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private S3ImageUploader s3ImageUploader;

    @Override
    public ApiResponse<?> newReport(CrimeReportDTO crimereport) {
        CrimeReports crimeReports = modelMapper.map(crimereport,CrimeReports.class);

        String fileName ="";

        if(crimereport.getEvidences().length > 0)
        {
            fileName = s3ImageUploader.uploadImage(crimereport.getEvidences()[0]);
//            throw  new ImageUploadException("Evidence not present");
        }

        return new ApiResponse<>("Report Controller working and evidences uploaded", fileName);
    }
}
