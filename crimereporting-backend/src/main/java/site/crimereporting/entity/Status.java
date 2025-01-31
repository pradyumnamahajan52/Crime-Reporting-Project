package site.crimereporting.entity;

public enum Status {
	SUBMITTED,                  // Initial submission by the user (form submit)
    ACKNOWLEDGED,               // Validated and acknowledged by authorities (seen by police station)
    REJECTED,                   // Report dismissed as invalid or irrelevant
    PENDING_ADDITIONAL_INFO,    // Awaiting further details from the reporter
    RECEIVED,                   // Report officially received (could merge with ACKNOWLEDGED) (send FIR)
//    UNDER_REVIEW,               // Authorities reviewing the details of the report
    UNDER_INVESTIGATION,        // Case actively being investigated
    ON_HOLD,                    // Temporarily paused due to external dependencies
    RESOLVED,                   // Case successfully resolved
    CLOSED                      // Investigation concluded (may or may not be resolved)
}
