import { redirect } from "react-router-dom";
import { API } from "../../API";

export async function LoginAction({ request }) {
  try {
    const url = new URL(request.url);
    const step = url.searchParams.get("step"); // Check if it's OTP step or Login step
    const data = await request.formData();

    if (step === "otp") {
      // OTP Sending Action
      const authData = { email: data.get("email") };

      const response = await fetch(`${API}/users/signin/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      });

      if (response.ok) {
        return new Response(JSON.stringify({ success: true, message: "OTP Sent" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        return new Response(JSON.stringify({ error: "Failed to send OTP" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // OTP Verification & Login Step
    const authData = {
      email: data.get("email"),
      otp: data.get("otp"),
    };
    console.log(authData)

    const response = await fetch(`${API}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (response.ok) {
      const responseData = await response.json();

      const expire_time = new Date(responseData.expiration_time).toUTCString();
      document.cookie = `expiration=${expire_time};expires=${expire_time};path=/`;
      localStorage.setItem("user-info", JSON.stringify(responseData));
      document.cookie = `token=${responseData.token};expires=${expire_time};path=/`;
      console.log('====================================');
      console.log(responseData);
      console.log('====================================');

      console.log('====================================');
      console.log("responseData?.role",responseData?.role);
      console.log('====================================');

      if (responseData?.role === "POLICE") {
        return redirect("/police/");
      }
      if (responseData?.role === "ADMIN") {
        return redirect("/admin/");
      }
      return redirect("/");
    } else {
      return new Response(JSON.stringify({ error: "Invalid OTP or credentials" }), {
        status: response.status,
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
