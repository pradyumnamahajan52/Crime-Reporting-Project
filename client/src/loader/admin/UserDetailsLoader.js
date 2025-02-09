import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  return { userData: loadUserDetails() }; // ✅ Return promise directly for Suspense
}

// ✅ Function to fetch user details (returns promise)
async function loadUserDetails() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/admin/user/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch User Details");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching User Details.");
  }
}
