import { redirect } from "react-router-dom";
import { API } from "../../API";

export async function PoliceProfileAction({ request }) {
  try {
    const formData = await request.formData();
    const token = getAuthToken();
    console.log("PoliceProfileAction",token);
    
    // Extract form data
    const policeProfileData = {
      // id: formData.get("id"),
      // email:formData.get("email"),
      fullName: formData.get("fullName"),
      phoneNumber: formData.get("phoneNumber")
    };

    // Send update request to backend
    const response = await fetch(`${API}/police/user/details`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(policeProfileData),
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
