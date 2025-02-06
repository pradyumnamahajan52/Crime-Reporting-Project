package site.crimereporting.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeCategoryDTO;

public interface CrimeCategoryService {

	ApiResponse<List<CrimeCategoryDTO>>  getAllCategories();


    ApiResponse<CrimeCategoryDTO> addCategory(CrimeCategoryDTO crimeCategoryDTO);
}
