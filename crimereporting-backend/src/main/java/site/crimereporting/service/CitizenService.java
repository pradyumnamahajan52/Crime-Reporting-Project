package site.crimereporting.service;

import jakarta.validation.Valid;
import site.crimereporting.dtos.*;

import java.io.IOException;

public interface CitizenService {



	ApiResponse<?> getLoggedInCitizenDetails();

	ApiResponse<?> updateLoggedInCitizenDetails(@Valid CitizenDTO citizenDTO);
}
