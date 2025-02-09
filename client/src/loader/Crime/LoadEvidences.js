import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

async function loadEvidences(id) {
  try {

    const formData = new FormData();
    formData.append("crimeReportId", id)

    const token = getAuthToken();
    const response = await fetch(`${API}/crimereport/get-evidence`, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",  
        Authorization: `Bearer ${token}`, // for token
      },
      body: formData
    });

    if (!response.ok) {
      const responseData = await response.json();

      throw new Error(responseData?.error || "Failed to fetch report details");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching report details");
  }
}

// Loader now returns a normal async function instead of `defer()`
export async function loader({params}) {
    const { id } = params;
    if (!id) {
        throw new Error("Crime report ID is required");
      } 
  const evidences = await loadEvidences(id);

  return { evidences }; 
}
