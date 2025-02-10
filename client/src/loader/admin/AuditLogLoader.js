import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  // Return the promise directly (do not await)
  const auditData = loadAdminAuditLog();

  return { auditData };
}

// ✅ Function to fetch audit logs (returns promise)
async function loadAdminAuditLog() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/admin/auditlog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // for token authentication
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch audit logs");
    }

    return response.json(); // Return the JSON response
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching logs.");
  }
}
