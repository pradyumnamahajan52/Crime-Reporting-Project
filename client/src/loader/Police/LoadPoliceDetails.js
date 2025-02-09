import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

async function loadPoliceDetails() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/police/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",  
        Authorization: `Bearer ${token}`, // for token
      },
    });

    if (!response.ok) {
      const responseData = await response.json();

      throw new Error(responseData?.error || "Failed to fetch Police Details");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching Police Details.");
  }
}

// Loader now returns a normal async function instead of `defer()`
export async function loader() {
  const userData = await loadPoliceDetails();

  return { userData }; 
}
