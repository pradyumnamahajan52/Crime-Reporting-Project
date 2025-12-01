package site.crimereporting.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * File Storage Configuration - Replaces S3Config
 * Configures local file storage and serving
 */
@Configuration
@Slf4j
public class FileStorageConfig implements WebMvcConfigurer {

    @Value("${file.upload.dir:uploads}")
    private String uploadDir;

    /**
     * Configure resource handlers to serve uploaded files
     * Files will be accessible at /api/files/**
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadPath = Paths.get(uploadDir).toAbsolutePath().normalize();
        String uploadPathStr = uploadPath.toUri().toString();

     log.info("📁 Configuring file serving from: {}", uploadPathStr);

        registry.addResourceHandler("/api/files/**")
                .addResourceLocations(uploadPathStr)
                .setCachePeriod(3600); // Cache for 1 hour

        log.info("✅ Files will be served from: /api/files/**");
    }
}