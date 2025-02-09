import { API } from "../../API";
import { getAuthToken } from "../user/Auth";

export async function updatePoliceStationAction({ request }) {
  try {
    const formData = await request.formData();
    console.log("in action " + formData)

    // Convert formData into JSON object
    // const stationData = {
    //   stationCode: formData.get("stationCode"),
    //   stationName: formData.get("stationName"),
    //   addressLine1: formData.get("address.addressLine1"),
    //   addressLine2: formData.get("address.addressLine2"),
    //   city: formData.get("address.city"),
    //   state: formData.get("address.state"),
    //   country: formData.get("address.country"),
    //   pinCode: formData.get("address.pinCode"),
    //   latitude: formData.get("address.latitude"),
    //   longitude: formData.get("address.longitude"),

    // };

    // Send request to backend
    const response = await fetch(`${API}/admin/updatePoliceStation`, {
      method: "PUT",
      // headers: { "Content-Type": "application/json" },
      headers: { "Authorization": "Bearer" + " " + getAuthToken() },
      body: formData,
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: "Police station updated successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to update police station" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
