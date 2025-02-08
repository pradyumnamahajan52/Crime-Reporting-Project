package site.crimereporting.daoTesting;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import site.crimereporting.dao.PoliceStationDao;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.TestDto;
import site.crimereporting.entity.PoliceStation;

@DataJpaTest
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)
public class testingReportService {
	
	@Autowired
	PoliceStationDao policeStationDao;
	
	@Test
	public void testingNewReport() {
//		CrimeReportDTO crimeReportDTO = new CrimeReportDTO();
		 // Arrange - Provide test input values
        double crimeLat = 18.5891;
        double crimeLon = 73.7057;
        int limitCount = 3;

        // Act - Call the stored procedure
        List<TestDto> nearestStations = policeStationDao.getNearestPoliceStations(crimeLat, crimeLon, limitCount);
        
        System.out.println("working");


        // Assert - Validate results
        assertThat(nearestStations).isNotEmpty(); // Ensure some stations are returned

		
        // Print results for debugging (optional)
        nearestStations.forEach(System.out::println);
	}
}
