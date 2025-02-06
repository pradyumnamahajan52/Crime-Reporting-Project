import { API } from "../../API";
import { getAuthToken } from "../user/Auth";

export async function newCrimeReportAction({ request }) {
  try {


    const formdata = await request.formData()
    const token = getAuthToken();

    console.log("in action - "+ formdata)
    // Send request to backend
    const response = await fetch(`${API}/crimereport/newreport`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // for token
      },
      body: formdata
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: "Report submitted successfully!" }),
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
