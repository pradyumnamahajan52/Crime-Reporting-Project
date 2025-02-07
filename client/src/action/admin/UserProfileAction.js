import { redirect } from "react-router-dom";
import { API } from "../../API";

export async function UserProfileAction({ request }) {
  try {
    const formData = await request.formData();

    // Extract form data
    const policeStationData = {
      id: formData.get("id"),
      stationCode: formData.get("stationCode"),
      stationName: formData.get("stationName"),
      addressLine1: formData.get()
    };

    // Send update request to backend
    const response = await fetch(`${API}/user/details`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfileData),
    });

    if (response.ok) {
      return redirect("/profile"); // Redirect user back to profile page after update
    } else {
      return new Response(JSON.stringify({ error: "Failed to update profile" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
