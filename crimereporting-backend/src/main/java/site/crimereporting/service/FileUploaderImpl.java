package site.crimereporting.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.custom_exception.ImageUploadException;
import site.crimereporting.dtos.FileUploadInfoDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * File Uploader Implementation - Replaces S3ImageUploaderImpl
 * Uses local file storage instead of AWS S3
 */
@Service
@Slf4j
public class FileUploaderImpl implements FileUploader {

    @Autowired
    private LocalFileStorageService fileStorageService;

    /**
     * Upload file to local storage
     * Replaces S3 uploadImage method
     */
    @Override
    public FileUploadInfoDTO uploadFile(MultipartFile file) {
        try {
            if (file == null || file.isEmpty()) {
                throw new ImageUploadException("Cannot upload empty file");
            }

            // Get original filename
            String originalFilename = file.getOriginalFilename();

            // Extract file extension
            String fileExtension = "";
            if (originalFilename != null && originalFilename.contains(".")) {
                fileExtension = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
            }

            // Determine folder based on file type
            String folder = determineFolder(file.getContentType(), fileExtension);

            // Upload file to local storage
            String relativePath = fileStorageService.uploadFile(file, folder);

            // Get accessible URL
            String fileUrl = fileStorageService.getFileUrl(relativePath);

            log.info("✅ File uploaded successfully: {} -> {}", originalFilename, relativePath);

            // Return file upload info (similar to S3 response)
            return new FileUploadInfoDTO(
                    fileUrl,           // URL to access the file
                    relativePath,      // File path (replaces S3 key/filename)
                    fileExtension      // File type/extension
            );

        } catch (Exception e) {
            log.error("❌ Error uploading file: {}", e.getMessage());
            throw new ImageUploadException("Error in uploading file: " + e.getMessage());
        }
    }

    /**
     * Get accessible URLs for file paths
     * Replaces S3's presigned URLs
     * Since files are served locally, we just return direct URLs
     */
    @Override
    public List<String> getFileUrls(List<String> filePaths) {
        List<String> urls = new ArrayList<>();

        for (String filePath : filePaths) {
            try {
                // Check if file exists
                if (fileStorageService.fileExists(filePath)) {
                    String url = fileStorageService.getFileUrl(filePath);
                    urls.add(url);
                    log.debug("Generated URL for file: {} -> {}", filePath, url);
                } else {
                    log.warn("⚠️ File not found: {}", filePath);
                    // Add placeholder or skip
                    urls.add("FILE_NOT_FOUND: " + filePath);
                }
            } catch (Exception e) {
                log.error("❌ Error generating URL for file: {}", filePath, e);
                urls.add("ERROR: " + filePath);
            }
        }

        return urls;
    }

    /**
     * Determine appropriate folder based on file type
     * Organizes files into different folders
     */
    private String determineFolder(String contentType, String extension) {
        if (contentType == null) {
            return "general";
        }

        // Image files
        if (contentType.startsWith("image/")) {
            return "evidence";  // Default for images
        }

        // Video files
        if (contentType.startsWith("video/")) {
            return "evidence";
        }

        // PDF documents
        if (contentType.equals("application/pdf")) {
            return "documents";
        }

        // Other documents
        if (contentType.contains("document") ||
                contentType.contains("word") ||
                contentType.contains("text")) {
            return "documents";
        }

        // Default folder
        return "general";
    }
}