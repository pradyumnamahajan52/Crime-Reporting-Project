import React from "react";
import Right from "../../Components/Register_Login.jsx/Right";
import LoginForm from "../../Components/User/LoginForm";

const UserLogin = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2 flex justify-center items-center -mt-10">
      <LoginForm />
      </div>

      <div className="w-1/2  bg-primary rounded-tl-[7%] rounded-bl-[7%]">
        <Right />
      </div>
    </div>
  );
};

export default UserLogin;
