import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

async function loadAdmnAuditLog() {
  try {
    // const token = getAuthToken();
    const response = await fetch(`${API}/admin/auditlog`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",  
      //   Authorization: `Bearer ${token}`, // for token
      // },
    });

    if (!response.ok) {
      const responseData = await response.json();

      throw new Error(responseData?.error || "Failed to fetch audit logs");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching logs.");
  }
}

// Loader now returns a normal async function instead of `defer()`
export async function loader() {
  const auditData = await loadAdmnAuditLog();

  return { auditData }; 
}
