import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  // Do NOT await; return promise directly
  const crimeReportsData = fetchCrimeReports();
  
  return { crimeReportsData };
}

//  Function to fetch reports (returns promise)
async function fetchCrimeReports() {
  const token = getAuthToken();
  const response = await fetch(`${API}/police/reports`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch crime reports.");
  }

  return response.json();
}
