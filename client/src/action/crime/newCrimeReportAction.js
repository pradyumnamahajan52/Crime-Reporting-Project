import { API } from "../../API";
import { getAuthToken } from "../user/Auth";

export async function newCrimeReportAction({ request }) {
  try {
    const url = new URL(request.url);
    const step = url.searchParams.get("step"); // Check if it's report submission or police station selection step
    const formdata = await request.formData();
    const token = getAuthToken();

    console.log("In action - step:", step, "formdata:", formdata);

    if (step === "select-police-station") {
      // Step 2: Assign the report to the selected police station
      const response = await fetch(`${API}/crimereport/update-police-station`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formdata,
      });

      if (response.ok) {
        return new Response(
          JSON.stringify({ success: "Police station assigned successfully!" }),
          { status: 200, reportSubmitted: true, policeAssigned: true, headers: { "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({ error: "Failed to assign police station" }),
          { status: 400, reportSubmitted: true, policeAssigned: false, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Step 1: Submit a new crime report
    const response = await fetch(`${API}/crimereport/newreport`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    });

    if (response.ok) {
      const responseData = await response.json();
      return new Response(
        JSON.stringify({
          success: "Crime Report Submitted Successfully",
          reportSubmitted: true,
          ...responseData,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to submit crime report" }),
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
