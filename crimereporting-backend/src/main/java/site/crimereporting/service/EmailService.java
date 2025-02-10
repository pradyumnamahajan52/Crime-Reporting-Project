package site.crimereporting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import site.crimereporting.entity.CrimeReports;
import site.crimereporting.entity.PoliceStation;

@Service
public class EmailService {
    
    @Autowired
    private JavaMailSender mailSender;

    public void sendOtpEmail(String to, String otp) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject("Your OTP Code");
            helper.setText("Your OTP for login is: " + otp + ". It is valid for 5 minutes.");

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }
    
    public void generateFIR(String to, CrimeReports crimeReports) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject("Acknowledgement of the Crime Report");
            
            String policeStationName = "Not yet assigned";
            if(crimeReports.getPoliceStation() != null) {
            	policeStationName = crimeReports.getPoliceStation().getStationName();
            }
            
            String content = "<h2>FORM NO. "+crimeReports.getId()+"</h2>\r\n"
            		+ "<h3>CRIME REPORT ACKNOWLEDGEMENT</h3>\r\n"
            		+ "<p><b>Information of a Cognizable Crime Reported under Section 154</b></p>\r\n"
            		+ "<hr>\r\n"
            		+ "<br>\r\n"
            		+ "<h2><b>Report Details: </b> </h2>\r\n"
            		+ "<p><b>Police Station : </b> "+policeStationName+" </p>\r\n"
            		+ "<p><b>Date of Report : </b>"+crimeReports.getCrimeDate()+"</p> \r\n"
            		+ "<p><b>Crime Category : </b>"+crimeReports.getCrimeCategory().getCategory()+" "+crimeReports.getCrimeCategory().getSubCategory()+" </p> \r\n"
            		+ "<p><b>Crime Status : "+crimeReports.getReportStatus()+"</b> </p> \r\n"
            		+ "<p><b>Crime Description : </b> "+crimeReports.getDescription()+"</p> <br\r\n"
            		+ "\r\n"
            		+ "\r\n"
            		+ "<h3><b>F.I.R. ON AUTHENTIC INFORMATION</b></h3> <br>\r\n"
            		+ "\r\n"
            		+ "<p><b>Note:</b> The information given to the Police Officer for registration of a case must be authentic. \r\n"
            		+ "    It should not be gossip but should be traced to an individual who should be responsible for \r\n"
            		+ "    imparting information. It may be hearsay but the person in possession of hearsay should mention \r\n"
            		+ "    the source of information and take responsibility for it. An irresponsible rumour should not result \r\n"
            		+ "    in registration of F.I.R.</p>";
            message.setContent(content, "text/html; charset=utf-8");
            
           

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send crime report acknowledgement email", e);
        }
    }
}
