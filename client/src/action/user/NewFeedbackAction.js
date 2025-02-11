import { API } from "../../API";
import { getAuthToken } from "./Auth";

export async function NewFeedbackAction({ request }) {
  try {
    const formData = await request.formData();
    const token = getAuthToken();
    console.log('====================================');
    console.log("feedback",formData.get("comments"));
    console.log("feedback",formData.get("rating"));
    console.log('====================================');



    const response = await fetch(`${API}/users/feedback`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body:formData,
    });

    if (response.ok) {
      return { success: "Feedback submitted successfully!" };
    } else {
      return { error: "Failed to submit feedback." };
    }
  } catch (error) {
    return { error: "An unexpected error occurred." };
  }
}
