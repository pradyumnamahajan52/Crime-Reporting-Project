package site.crimereporting.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

/**
 * Local File Storage Service - Replaces AWS S3 functionality
 * Stores files in local directory structure
 */
@Service
@Slf4j
public class LocalFileStorageService {

    @Value("${file.upload.dir:uploads}")
    private String uploadDir;

    /**
     * Initialize upload directory on application startup
     */
    @PostConstruct
    public void init() {
        try {
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
                log.info("✅ Created upload directory: {}", uploadPath.toAbsolutePath());
            } else {
                log.info("✅ Upload directory exists: {}", uploadPath.toAbsolutePath());
            }
        } catch (IOException e) {
            log.error("❌ Could not create upload directory", e);
            throw new RuntimeException("Could not create upload directory", e);
        }
    }

    /**
     * Upload file to local storage
     *
     * @param file MultipartFile to upload
     * @param folderName Subfolder name (e.g., "aadhaar", "evidence", "documents")
     * @return Relative file path (e.g., "aadhaar/uuid.jpg")
     */
    public String uploadFile(MultipartFile file, String folderName) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Cannot upload empty file");
        }

        try {
            // Create folder path
            Path folderPath = Paths.get(uploadDir, folderName);
            if (!Files.exists(folderPath)) {
                Files.createDirectories(folderPath);
                log.debug("Created folder: {}", folderPath);
            }

            // Generate unique filename
            String originalFilename = file.getOriginalFilename();
            String extension = "";
            if (originalFilename != null && originalFilename.contains(".")) {
                extension = originalFilename.substring(originalFilename.lastIndexOf("."));
            }
            String uniqueFilename = UUID.randomUUID().toString() + extension;

            // Save file
            Path filePath = folderPath.resolve(uniqueFilename);
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
            }

            String relativePath = folderName + "/" + uniqueFilename;
            log.info("✅ File uploaded successfully: {}", relativePath);
            return relativePath;

        } catch (IOException e) {
            log.error("❌ Failed to upload file", e);
            throw new RuntimeException("Failed to upload file: " + e.getMessage(), e);
        }
    }

    /**
     * Upload byte array as file
     *
     * @param data Byte array data
     * @param folderName Subfolder name
     * @param extension File extension (e.g., ".jpg", ".pdf")
     * @return Relative file path
     */
    public String uploadByteArray(byte[] data, String folderName, String extension) {
        if (data == null || data.length == 0) {
            throw new IllegalArgumentException("Cannot upload empty data");
        }

        try {
            // Create folder path
            Path folderPath = Paths.get(uploadDir, folderName);
            if (!Files.exists(folderPath)) {
                Files.createDirectories(folderPath);
            }

            // Generate unique filename
            String uniqueFilename = UUID.randomUUID().toString() + extension;
            Path filePath = folderPath.resolve(uniqueFilename);

            // Write bytes to file
            Files.write(filePath, data);

            String relativePath = folderName + "/" + uniqueFilename;
            log.info("✅ Byte array uploaded successfully: {}", relativePath);
            return relativePath;

        } catch (IOException e) {
            log.error("❌ Failed to upload byte array", e);
            throw new RuntimeException("Failed to upload byte array: " + e.getMessage(), e);
        }
    }

    /**
     * Get file from local storage
     *
     * @param relativePath Relative file path (e.g., "aadhaar/uuid.jpg")
     * @return File object
     */
    public File getFile(String relativePath) {
        try {
            Path filePath = Paths.get(uploadDir, relativePath);
            File file = filePath.toFile();

            if (!file.exists()) {
                log.error("❌ File not found: {}", relativePath);
                throw new RuntimeException("File not found: " + relativePath);
            }

            return file;

        } catch (Exception e) {
            log.error("❌ Failed to retrieve file: {}", relativePath, e);
            throw new RuntimeException("Failed to retrieve file: " + e.getMessage(), e);
        }
    }

    /**
     * Get file as byte array
     *
     * @param relativePath Relative file path
     * @return File content as byte array
     */
    public byte[] getFileAsBytes(String relativePath) {
        try {
            File file = getFile(relativePath);
            byte[] bytes = FileUtils.readFileToByteArray(file);
            log.debug("Read {} bytes from file: {}", bytes.length, relativePath);
            return bytes;
        } catch (IOException e) {
            log.error("❌ Failed to read file as bytes: {}", relativePath, e);
            throw new RuntimeException("Failed to read file: " + e.getMessage(), e);
        }
    }

    /**
     * Delete file from local storage
     *
     * @param relativePath Relative file path to delete
     * @return true if deleted successfully
     */
    public boolean deleteFile(String relativePath) {
        if (relativePath == null || relativePath.isEmpty()) {
            return false;
        }

        try {
            Path filePath = Paths.get(uploadDir, relativePath);
            boolean deleted = Files.deleteIfExists(filePath);

            if (deleted) {
                log.info("✅ File deleted successfully: {}", relativePath);
            } else {
                log.warn("⚠️ File not found for deletion: {}", relativePath);
            }

            return deleted;

        } catch (IOException e) {
            log.error("❌ Failed to delete file: {}", relativePath, e);
            return false;
        }
    }

    /**
     * Check if file exists
     *
     * @param relativePath Relative file path
     * @return true if file exists
     */
    public boolean fileExists(String relativePath) {
        if (relativePath == null || relativePath.isEmpty()) {
            return false;
        }
        Path filePath = Paths.get(uploadDir, relativePath);
        return Files.exists(filePath);
    }

    /**
     * Get file URL/path for serving via HTTP
     *
     * @param relativePath Relative file path
     * @return URL path for accessing file (e.g., "/api/files/aadhaar/uuid.jpg")
     */
    public String getFileUrl(String relativePath) {
        return "/api/files/" + relativePath;
    }

    /**
     * Get absolute path of upload directory
     *
     * @return Absolute path as string
     */
    public String getUploadDirAbsolutePath() {
        return Paths.get(uploadDir).toAbsolutePath().toString();
    }
}