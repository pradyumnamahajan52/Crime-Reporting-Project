package site.crimereporting.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.custom_exception.ImageUploadException;
import site.crimereporting.custom_exception.ResourceNotFoundException;
import site.crimereporting.dao.*;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.CrimeReportResponseDTO;
import site.crimereporting.dtos.FileUploadInfoDTO;
import site.crimereporting.entity.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ReportServiceImpl implements ReportService {

    @Autowired
    private CrimeReportsDao crimeReportsDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private CitizenDao citizenDao;

    @Autowired
    private EvidenceDao evidenceDao;

    @Autowired
    private CrimeCategoryDao crimeCategoryDao;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private S3ImageUploader s3ImageUploader;

    @Override
    public ApiResponse<?> newReport(CrimeReportDTO crimereport) {
        //Mapping Reports
        CrimeReports crimeReports = modelMapper.map(crimereport,CrimeReports.class);

        // Get Current logged In Email from security Context Holder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInEmail = authentication.getName();
        //find User by logged in email
        User user = userDao.findByEmail(loggedInEmail).orElseThrow(() -> new ResourceNotFoundException("User with Email does not exist"));

        //finding citizen by using user
        Citizen citizen = citizenDao.findByUser(user);
        
        if(citizen == null)
        	throw new ApiException("cannot find Citizen");
        crimeReports.setCitizen(citizen);
        // Mapping address to address to entity and setting it crime reports
        Address address = modelMapper.map(crimereport,Address.class);
        crimeReports.setAddress(address);
        // finding crime category and setting it crime category
        CrimeCategory crimeCategory = crimeCategoryDao.findById(crimereport.getCrimeCategoryId()).orElseThrow(() -> new ResourceNotFoundException("Invalid Crime Category"));
        crimeReports.setCrimeCategory(crimeCategory);
        
        //setting default status of crime reported
        crimeReports.setReportStatus(Status.SUBMITTED);
        CrimeReports persistentCrimeReports = crimeReportsDao.save(crimeReports);

        if(persistentCrimeReports == null)
        {
            throw new ApiException("Crime Reporting failed");
        }


        if(crimereport.getEvidences() != null)
        {
            for (MultipartFile file : crimereport.getEvidences()) {
                FileUploadInfoDTO fileUploadInfoDTO = s3ImageUploader.uploadImage(file);
                Evidence evidence = new Evidence();
                evidence.setCrimeReports(persistentCrimeReports);
                evidence.setFileUrl(fileUploadInfoDTO.getFileUrl());
                evidence.setFileType(fileUploadInfoDTO.getFileType());
                evidenceDao.save(evidence);
            }

        }

        return new ApiResponse<>("Crime Report Uploaded Successfully", new CrimeReportResponseDTO(
                persistentCrimeReports.getDescription(),
                persistentCrimeReports.getCrimeCategory(),
                persistentCrimeReports.getCrimeDate(),
                persistentCrimeReports.getReportStatus(),
                persistentCrimeReports.getAddress().getAddressLine1(),
                persistentCrimeReports.getAddress().getAddressLine2(),
                persistentCrimeReports.getAddress().getCity(),
                persistentCrimeReports.getAddress().getState(),
                persistentCrimeReports.getAddress().getCountry(),
                persistentCrimeReports.getAddress().getPinCode(),
                null));
    }
}
