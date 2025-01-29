package site.crimereporting;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import site.crimereporting.dtos.CitizenRegisterRequestDTO;
import site.crimereporting.dtos.RegisterRequestDTO;

@SpringBootApplication
public class CrimereportingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrimereportingApplication.class, args);
	}

	@Bean
	
	public ModelMapper getMapper() {
		
		ModelMapper mapper = new ModelMapper();
		
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT).setPropertyCondition(Conditions.isNotNull());
		
		
		return mapper;
		
	}
}
