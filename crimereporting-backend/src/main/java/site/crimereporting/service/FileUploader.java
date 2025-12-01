package site.crimereporting.service;

import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.dtos.FileUploadInfoDTO;

import java.util.List;

/**
 * File Uploader Interface - Replaces S3ImageUploader
 * Handles file upload operations using local storage
 */
public interface FileUploader {

    /**
     * Upload a file to local storage
     * @param file The file to upload
     * @return File upload information (path, URL, type)
     */
    FileUploadInfoDTO uploadFile(MultipartFile file);

    /**
     * Get accessible URLs for a list of file paths
     * Replaces S3's presigned URLs - returns direct HTTP URLs
     * @param filePaths List of relative file paths
     * @return List of accessible URLs
     */
    List<String> getFileUrls(List<String> filePaths);
}