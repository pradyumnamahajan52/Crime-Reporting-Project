import { API } from "../../API";

export async function newCrimeReportAction({ request }) {
  try {


    const formdata = await request.formdata()

    console.log("in action - "+ request)
    // Send request to backend
    const response = await fetch(`${API}/crimereport/newreport`, {
      method: "POST",
    //   headers: { "Content-Type": "multipart/form-data" },
      body: formdata,
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
