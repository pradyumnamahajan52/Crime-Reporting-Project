package site.crimereporting.config;


import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


//config for amazons3 class for providing credentials
@Configuration
public class S3Config {

    @Value("${cloud.aws.credentials.access-key}")
    private  String awsAccessKey;
    @Value("${cloud.aws.credentials.secret-key}")
    private  String awsSecretKey;
    @Value("${cloud.aws.region.static}")
    private  String region;



    @Bean
    public AmazonS3 client() {

        AWSCredentials awsCredentials = new BasicAWSCredentials(awsAccessKey,awsSecretKey);

        AmazonS3 amazonS3 = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .withRegion(region)
                .build();
        return  amazonS3;

    }

}
