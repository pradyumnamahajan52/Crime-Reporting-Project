package site.crimereporting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import site.crimereporting.custom_exception.ApiException;
import site.crimereporting.dao.CrimeCategoryDao;
import site.crimereporting.dtos.ApiResponse;
import site.crimereporting.dtos.CrimeCategoryDTO;
import site.crimereporting.entity.CrimeCategory;

@Service
@Transactional
public class CrimeCategoryServiceImpl implements CrimeCategoryService {

	@Autowired
	private CrimeCategoryDao crimeCategoryDao;
	
	@Override
	public ApiResponse<List<CrimeCategoryDTO>> getAllCategories() {

		List<CrimeCategory> crimeCategoriesList =  crimeCategoryDao.findAll();
		
		if(crimeCategoriesList == null)
			throw new ApiException("failed to get all crime categories");
		
		List<CrimeCategoryDTO> crimeCategoryDTOList = new ArrayList<CrimeCategoryDTO>();
		
		for(CrimeCategory category : crimeCategoriesList) {
			CrimeCategoryDTO crimeCategoryDTO = new CrimeCategoryDTO(category.getId(), category.getCategory(), category.getSubCategory());
			crimeCategoryDTOList.add(crimeCategoryDTO);
		}
		
		return new ApiResponse<List<CrimeCategoryDTO>>("successfully get all crime categories", crimeCategoryDTOList);
	}

	@Override
	public ApiResponse<CrimeCategoryDTO> addCategory(CrimeCategoryDTO crimeCategoryDTO) {
		// Create and map crime category entity
		CrimeCategory crimeCategory = new CrimeCategory();
		crimeCategory.setCategory(crimeCategoryDTO.getCategory());
		crimeCategory.setSubCategory(crimeCategoryDTO.getSubCategory());

		// Save crime category in the database
		CrimeCategory savedCategory = crimeCategoryDao.save(crimeCategory);

		if (savedCategory == null) {
			throw new ApiException("Crime category addition failed!");
		}

		// Map saved entity to DTO
		CrimeCategoryDTO savedCategoryDTO = new CrimeCategoryDTO();
		savedCategoryDTO.setCategoryId(savedCategory.getId());
		savedCategoryDTO.setCategory(savedCategory.getCategory());
		savedCategoryDTO.setSubCategory(savedCategory.getSubCategory());

		return new ApiResponse<>("Crime category added successfully!", savedCategoryDTO);
	}

}
