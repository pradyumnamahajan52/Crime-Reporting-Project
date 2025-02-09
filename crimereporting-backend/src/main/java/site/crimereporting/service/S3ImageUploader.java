package site.crimereporting.service;

import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.dtos.FileUploadInfoDTO;

import java.util.List;

public interface S3ImageUploader {

    FileUploadInfoDTO uploadImage(MultipartFile image);

//    List<String> allFiles();

    List<String> preSignedUrl(List<String> fileNames);
}
