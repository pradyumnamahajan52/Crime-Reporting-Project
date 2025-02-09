import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
    const crimeStatusData = fetchCrimeStatus();

    return { crimeStatusData  }

}

async function fetchCrimeStatus() {
    const token = getAuthToken();
    const response = await fetch(`${API}/citizen/crimestatus`, {
        method: "GET",
        headers : {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch crime reports.");
    }

    return response.json();
}