import { API } from "../../API";

export async function NewPoliceStationAction({ request }) {
  try {
    const formData = await request.formData();
//    console.log("formData NewPoliceStationAction",formData)

    // Send request to backend
    const response = await fetch(`${API}/admin/policeStations`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: formData,
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: "Police station added successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to add police station" }),
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
