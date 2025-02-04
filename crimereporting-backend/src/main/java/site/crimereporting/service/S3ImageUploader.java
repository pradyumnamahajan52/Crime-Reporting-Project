package site.crimereporting.service;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface S3ImageUploader {

    String uploadImage(MultipartFile image);

    List<String> allFiles();

    String preSignedUrl();
}
