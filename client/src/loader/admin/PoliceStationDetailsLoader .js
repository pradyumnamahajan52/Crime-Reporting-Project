import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader({ params }) {
  const { id } = params; //  Get police station ID from URL
  return { policeStationData: loadPoliceStationDetails(id) }; //  Pass the ID
}

//  Function to fetch a specific police station by ID
async function loadPoliceStationDetails(id) {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/admin/policeStations/details?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch police station details.");
    }

    return response.json(); //  Return JSON response
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching police stations.");
  }
}
