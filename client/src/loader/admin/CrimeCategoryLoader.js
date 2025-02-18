import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  return { categoryData: loadCrimeCategory() }; //  Return promise directly
}

//  Function to fetch crime categories (returns promise)
async function loadCrimeCategory() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/crimecategory/getCategories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch Crime Categories.");
    }

    return response.json();
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching Crime Categories.");
  }
}
