import { API } from "../../API";
import { getAuthToken } from "../user/Auth";

export async function newCrimeCategory({ category, subCategory }) {
  try {
    console.log("Form data received:", { category, subCategory });

    const token = getAuthToken();
    const response = await fetch(`${API}/police/crime-category`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category, subCategory }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: "Crime category added successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      const errorData = await response.json();
      return new Response(
        JSON.stringify({ error: errorData.message || "Failed to add crime category" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
