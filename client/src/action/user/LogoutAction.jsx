import { redirect } from "react-router-dom";
import { getAuthToken } from "./Auth";
import { API } from "../../API";

export async function LogoutAction() {
  try {
    // Send a request to your backend to log out the user
    const response = await fetch(`${API}/user/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error("Logout Error");
    }

    // If the logout was successful, remove token and user info from localStorage
    localStorage.removeItem("user-info");
    localStorage.removeItem("expiration");

    // Set expiration time to a past date to remove the cookie
    document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    document.cookie = `expiration=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;

    return redirect("/");
  } catch (error) {
    console.error("Logout error:", error.message);
    throw new Error(error.message || "Something went wrong during logout.");
  }
}
