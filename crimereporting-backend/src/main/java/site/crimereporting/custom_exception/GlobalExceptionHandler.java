package site.crimereporting.custom_exception;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.swagger.v3.oas.models.responses.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiException> handleResourceNotFoundException(ResourceNotFoundException ex) {

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(ex.getMessage()));

	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {

		List<FieldError> fieldErrors = ex.getFieldErrors();

		Map<String, String> map = fieldErrors.stream()
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));

		return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).body(map);

	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<?> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {

		Pattern pattern = Pattern.compile("Duplicate entry '(.+?)'");
		Matcher matcher = pattern.matcher(ex.getMessage());

		String duplicateValue = null;
		if (matcher.find()) {
			duplicateValue = matcher.group(1); // 'jasmine123'
			System.out.println("Duplicate value: " + duplicateValue);
		}

		return ResponseEntity.status(HttpStatus.CONFLICT).body(new ApiException(duplicateValue + " already exists!"));

	}

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleAllRemainingException(RuntimeException ex) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiException(ex.getMessage()));

	}

}
