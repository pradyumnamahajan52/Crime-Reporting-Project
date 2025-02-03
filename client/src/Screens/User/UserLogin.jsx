import React from "react";
import Right from "../../Components/Register_Login.jsx/Right";
import LoginForm from "../../Components/User/LoginForm";

const UserLogin = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0 -mt-6 md:-mt-10">
      <LoginForm />
      </div>

      <div className="hidden md:block w-1/2 bg-primary rounded-tl-[7%] rounded-bl-[7%] p-6">
        <Right />
      </div>
    </div>
  );
};

export default UserLogin;
