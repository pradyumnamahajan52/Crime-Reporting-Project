import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

async function loadReportDetails(id) {
  try {
    const formData = new FormData();
    formData.append("crimeReportId", id);

    const token = getAuthToken();
    const response = await fetch(`${API}/police/get-reportDetails`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // for token
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch report details.");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching report details.");
  }
}

//  Suspense-compatible loader
export async function loader({ params }) {
  const { id } = params;
  if (!id) throw new Error("Crime report ID is required");
  return { reportDetails: loadReportDetails(id) }; //  Return a Promise
}
