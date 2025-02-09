import React from "react";
import Right from "../../Components/Register_Login.jsx/Right";
import LoginForm from "../../Components/User/LoginForm";
import { motion } from "framer-motion";

const UserLogin = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
  {/* Left Section with LoginForm */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0 -mt-6 md:-mt-10"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <LoginForm />
  </motion.div>

  {/* Right Section */}
  <motion.div
    className="hidden md:block w-1/2 bg-primary rounded-tl-[7%] rounded-bl-[7%] p-6"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Right />
  </motion.div>
</div>
  );
};

export default UserLogin;
