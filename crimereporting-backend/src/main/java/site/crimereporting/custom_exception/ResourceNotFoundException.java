package site.crimereporting.custom_exception;

public class ResourceNotFoundException extends RuntimeException {
	public ResourceNotFoundException(String errMesg) {
		super(errMesg, null, false, false);
	}
}
