package site.crimereporting.daoTesting;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
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

    @Autowired
    private ModelMapper modelMapper;
	
	@Test
	public void testingNewReport() {
//		CrimeReportDTO crimeReportDTO = new CrimeReportDTO();
		 // Arrange - Provide test input values
        double crimeLat = 18.5891;
        double crimeLon = 73.7057;
        int limitCount = 3;

        // Act - Call the stored procedure
        List<?> nearestStations = policeStationDao.getNearestPoliceStations(crimeLat, crimeLon, limitCount);


        nearestStations.forEach((policestation) -> {TestDto testDto = modelMapper.map(policestation,TestDto.class); System.out.println(testDto);});

        
        System.out.println("working");


        // Assert - Validate results
        assertThat(nearestStations).isNotEmpty(); // Ensure some stations are returned

		
        // Print results for debugging (optional)
//        testDto.forEach(System.out::println);
	}
}
