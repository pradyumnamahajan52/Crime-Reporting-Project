import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

export async function loader() {
  // Return the promise directly instead of awaiting it
  const usersData = loadUsers();

  return { usersData };
}

//  Function to fetch users (returns promise)
async function loadUsers() {
  try {
    const token = getAuthToken();
    const response = await fetch(`${API}/admin/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // for token authentication
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch users");
    }

    return response.json(); // Return the JSON response
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching users.");
  }
}
