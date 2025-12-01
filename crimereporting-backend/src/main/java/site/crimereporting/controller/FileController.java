package site.crimereporting.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.service.LocalFileStorageService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

/**
 * File Controller - Handles file upload/download operations
 * Replaces AWS S3 endpoints
 */
@RestController
@RequestMapping("/api/files")
@CrossOrigin("*")
@RequiredArgsConstructor
@Slf4j
public class FileController {

    private final LocalFileStorageService fileStorageService;

    /**
     * Upload a file
     * @param file File to upload
     * @param folder Folder name (default: "general")
     * @return File information including path and URL
     */
    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "folder", defaultValue = "general") String folder) {

        try {
            String relativePath = fileStorageService.uploadFile(file, folder);
            String fileUrl = fileStorageService.getFileUrl(relativePath);

            Map<String, String> response = new HashMap<>();
            response.put("filePath", relativePath);
            response.put("fileUrl", fileUrl);
            response.put("fileName", file.getOriginalFilename());
            response.put("message", "File uploaded successfully");

            log.info("✅ File uploaded: {} -> {}", file.getOriginalFilename(), relativePath);
            return ResponseEntity.ok(new ApiResponse<>("File uploaded successfully", response));

        } catch (Exception e) {
            log.error("❌ Error uploading file", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ApiResponse<>(e.getMessage(), null));
        }
    }

    /**
     * Download/View a file
     * @param folder Folder name
     * @param filename File name
     * @return File content
     */
    @GetMapping("/{folder}/{filename:.+}")
    public ResponseEntity<Resource> downloadFile(
            @PathVariable String folder,
            @PathVariable String filename) {

        try {
            String relativePath = folder + "/" + filename;
            byte[] fileData = fileStorageService.getFileAsBytes(relativePath);

            ByteArrayResource resource = new ByteArrayResource(fileData);

            // Detect content type
            String contentType = Files.probeContentType(Paths.get(filename));
            if (contentType == null) {
                contentType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "inline; filename=\"" + filename + "\"")
                    .body(resource);

        } catch (Exception e) {
            log.error("❌ Error downloading file: {}/{}", folder, filename, e);
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * Delete a file
     * @param relativePath Relative file path (e.g., "aadhaar/uuid.jpg")
     * @return Success message
     */
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFile(@RequestParam String relativePath) {
        try {
            boolean deleted = fileStorageService.deleteFile(relativePath);

            if (deleted) {
                return ResponseEntity.ok(
                        new ApiResponse<>("File deleted successfully", null));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(new ApiResponse<>("File not found", null));
            }

        } catch (Exception e) {
            log.error("❌ Error deleting file: {}", relativePath, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(e.getMessage(), null));
        }
    }

    /**
     * Check if file exists
     * @param relativePath Relative file path
     * @return Boolean indicating existence
     */
    @GetMapping("/exists")
    public ResponseEntity<?> fileExists(@RequestParam String relativePath) {
        boolean exists = fileStorageService.fileExists(relativePath);
        Map<String, Boolean> response = new HashMap<>();
        response.put("exists", exists);
        return ResponseEntity.ok(new ApiResponse<>("File check completed", response));
    }

    /**
     * Get upload directory info
     * @return Upload directory information
     */
    @GetMapping("/info")
    public ResponseEntity<?> getStorageInfo() {
        Map<String, String> info = new HashMap<>();
        info.put("uploadDirectory", fileStorageService.getUploadDirAbsolutePath());
        info.put("message", "Local file storage is active");
        return ResponseEntity.ok(new ApiResponse<>("Storage info retrieved", info));
    }
}