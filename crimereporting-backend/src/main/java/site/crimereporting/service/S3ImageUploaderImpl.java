package site.crimereporting.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import site.crimereporting.custom_exception.ImageUploadException;
import site.crimereporting.dtos.FileUploadInfoDTO;

import java.io.IOException;
import java.util.List;
import java.util.UUID;


//Using object of amazons3 class for uploading files
@Service
public class S3ImageUploaderImpl implements S3ImageUploader {

    @Autowired
    private AmazonS3 amazonS3;

    @Value("${app.s3.bucket}")
    private String bucketName;

    @Override
    public FileUploadInfoDTO uploadImage(MultipartFile image)  {
        String actualFIleName= image.getOriginalFilename();
        // UUID -> genrating  Universal unique identifier for filename
        String fileName = UUID.randomUUID().toString()+actualFIleName.substring(actualFIleName.lastIndexOf("."));

        // creating metadata
        ObjectMetadata metadata = new ObjectMetadata();

        //set file size in metadata
        metadata.setContentLength(image.getSize());
        try {

            //uploading file into amazons3 bucket
            PutObjectResult putObjectResult = amazonS3.putObject(new PutObjectRequest(bucketName,fileName,image.getInputStream(),metadata));
            //returning filename
             return new FileUploadInfoDTO(amazonS3.getUrl(bucketName,fileName).toString(),fileName,fileName.substring(fileName.lastIndexOf(".") + 1));
        }
        catch (IOException e){
            throw new ImageUploadException("error in uploading image: "+e.getMessage());
        }

    }

    @Override
    public List<String> allFiles() {
        return List.of();
    }

    @Override
    public String preSignedUrl() {
        return "";
    }
}
