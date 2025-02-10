import { API } from "../../API";

export async function loader() {
  const contactData = await getContacts();

  return { contactData };
}

async function getContacts() {
  try {
    const response = await fetch(`${API}/users/getPoliceStationUserDetails`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      throw new Error(responseData?.error || "Failed to fetch contacts");
    }

    return response.json(); // Return the JSON response
  } catch (error) {
    throw new Error(error.message || "Something went wrong while fetching contacts.");
  }
}

