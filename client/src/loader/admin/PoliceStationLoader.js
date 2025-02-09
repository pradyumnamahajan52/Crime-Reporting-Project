import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  // Return the promise directly instead of awaiting it
  const policeStationData = loadPoliceStations();

  return { policeStationData };
}

// Function to fetch police stations (returns promise)
async function loadPoliceStations() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/admin/policeStations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // for token authentication
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch police stations");
    }

    return response.json(); // Return the JSON response
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching police stations");
  }
}
