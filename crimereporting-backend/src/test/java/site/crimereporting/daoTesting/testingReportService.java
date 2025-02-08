package site.crimereporting.daoTesting;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import site.crimereporting.dao.AddressDao;
import site.crimereporting.dao.PoliceStationDao;
import site.crimereporting.dtos.CrimeReportDTO;
import site.crimereporting.dtos.NearByPoliceStationDTO;
import site.crimereporting.entity.Address;
import site.crimereporting.entity.PoliceStation;

@DataJpaTest
@AutoConfigureTestDatabase(replace=AutoConfigureTestDatabase.Replace.NONE)
public class testingReportService {
	
	@Autowired
	PoliceStationDao policeStationDao;
	
	@Autowired
	ModelMapper model;
	
	@Autowired
	AddressDao addressDao;
	
	@Test
	public void testingNewReport() {
		 
		// Arrange - Provide test input values
        double crimeLat = 18.5891;
        double crimeLon = 73.7057;
        int limitCount = 3;
        
        

        // Act - Call the stored procedure
        List<Object[]> nearestStations = policeStationDao.getNearestPoliceStations(crimeLat, crimeLon, limitCount);
       
        
        // Assert - Validate results
        assertThat(nearestStations).isNotEmpty(); // Ensure some stations are returned
        
		

        List<NearByPoliceStationDTO> testDtoList = new ArrayList<>();
        for (Object obj : nearestStations) {
            Object[] row = (Object[]) obj; // Cast each object to Object[]
            
            NearByPoliceStationDTO testDto = new NearByPoliceStationDTO();
            testDto.setPoliceStationId((Long) row[0]);
            testDto.setStation_name((String) row[1]);
            
            Address add = addressDao.findById((Long) row[2]).orElseGet(null);
            testDto.setPoliceStationAddressLine1(add.getAddressLine1());
            testDto.setPoliceStationAddressLine2(add.getAddressLine2());
            testDto.setPoliceStationCity(add.getCity());
            testDto.setPoliceStationState(add.getState());
            
            testDto.setLatitude((Double) row[3]);
            testDto.setLongitude((Double) row[4]);
            testDto.setDistance((Double) row[5]);
           
            testDtoList.add(testDto);
        }
        
        testDtoList.forEach(System.out::println);

	}
}
