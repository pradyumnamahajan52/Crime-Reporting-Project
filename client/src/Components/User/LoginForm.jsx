import React, { useEffect, useState } from "react";
import { Form, useActionData, useNavigation,useNavigate, useSubmit } from "react-router-dom";
import LottieSection from "./LottieSection";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const actionData = useActionData();
  const navigation = useNavigation();
 const navigate = useNavigate();
  const submit = useSubmit();
  
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    }
    if (actionData?.success && actionData?.message === "OTP Sent") {
      setIsOtpSent(true);
      toast.success("OTP sent successfully!");
    }
  }, [actionData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    if (!isOtpSent) {
      // Send OTP
      submit(form, { method: "post", action: "/user/login?step=otp" });
    } else {
      // Login with OTP
      submit(form, { method: "post", action: "/user/login?step=login" });
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2500} theme="colored" transition={Bounce} />
      <LottieSection />

      <Form method="post" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="-mt-3 sm:-mt-5">
          <div className="mt-6 sm:mt-8">
            <label className="font-medium text-base sm:text-xl">Email/Phone Number</label>
          </div>
          <div className="flex items-center rounded-lg border-2 border-primary w-full sm:w-[350px] mt-3 sm:mt-4 p-2 sm:p-[3%_6%]">
            <input
              className="flex-grow outline-none px-2 text-sm sm:text-base"
              type="text"
              placeholder="Enter Email/Phone number"
              name="email"
              required
            />
          </div>
        </div>

        {/* OTP Input (Visible after OTP is sent) */}
        {isOtpSent && (
          <div className="-mt-5">
            <div className="mt-8">
              <label className="font-medium text-xl">OTP</label>
            </div>
            <div className="flex items-center rounded-lg border border-2 border-primary w-[350px] mt-4 p-[3%_6%]">
              <input
                className="flex-grow outline-none px-2"
                type="password"
                placeholder="Enter OTP"
                name="otp"
                required
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center" >
        <button
          className=" text-base bg-primary text-white rounded-lg py-2 px-[25%] mt-10 disabled:opacity-50 whitespace-nowrap"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Please Wait" : isOtpSent ? "Sign In" : "Send OTP"}
        </button>
        </div>
      </Form>

      {/* Signup Link */}
    
      <span className="text-sm sm:text-xl  ml-3 sm:ml-10 mt-10 sm:mt-20 mx-auto w-full sm:w-[200px]">
        Create New Account?
        <span className="text-primary cursor-pointer" onClick={() => navigate("/user/register")}>
          Sign Up
        </span>
      </span>
      
    </div>
  );
};

export default LoginForm;
