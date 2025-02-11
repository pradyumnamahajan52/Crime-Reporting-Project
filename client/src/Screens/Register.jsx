import React, { useState } from "react";
import LeftFormRegister from "../Components/Register_Login.jsx/LeftFormRegister";
import Right from "../Components/Register_Login.jsx/Right";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { registerCitizen, registerPolice } from "../Services/action/Login";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isCitizen, setCitizen] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const navigation = useNavigate();

  const [evidence, setEvidence] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidence(files);
  };

  const [citizenformData, setCitizenformData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "Test",
    cpassword: "Test",
    dateOfBirth: "",
    cardNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const citizenformFields = [
    {
      type: "text",
      placeholder: "Enter your Full Name",
      name: "fullName",
      value: citizenformData.fullName,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, fullName: e.target.value });
      },
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      value: citizenformData.email,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, email: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
      value: citizenformData.phoneNumber,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, phoneNumber: e.target.value });
      },
    },
    // {
    //   type: "password",
    //   placeholder: "Enter your Password",
    //   name: "password",
    //   value:citizenformData.password,
    //   onchange : (e) =>{
    //     setCitizenformData({...citizenformData,password:e.target.value})
    //   }
    // },
    // {
    //   type: "password",
    //   placeholder: "Enter Confirm Password",
    //   name: "cpassword",
    //   value:citizenformData.cpassword,
    //   onchange : (e) =>{
    //     setCitizenformData({...citizenformData,cpassword:e.target.value})
    //   }
    // },
    {
      type: "date",
      placeholder: "Enter your Date of Birth",
      name: "dateOfBirth",
      value: citizenformData.dateOfBirth,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, dateOfBirth: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your Card Number",
      name: "cardNumber",
      value: citizenformData.cardNumber,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, cardNumber: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your address Line 1",
      name: "addressLine1",
      value: citizenformData.addressLine1,
      onchange: (e) => {
        setCitizenformData({
          ...citizenformData,
          addressLine1: e.target.value,
        });
      },
    },
    {
      type: "text",
      placeholder: "Enter your address Line 2",
      name: "addressLine2",
      value: citizenformData.addressLine2,
      onchange: (e) => {
        setCitizenformData({
          ...citizenformData,
          addressLine2: e.target.value,
        });
      },
    },
    {
      type: "text",
      placeholder: "Enter your City",
      name: "city",
      value: citizenformData.city,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, city: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your state",
      name: "state",
      value: citizenformData.state,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, state: e.target.value });
      },
    },

    {
      type: "text",
      placeholder: "Enter your country",
      name: "country",
      value: citizenformData.country,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, country: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your pinCode",
      name: "pinCode",
      value: citizenformData.pinCode,
      onchange: (e) => {
        setCitizenformData({ ...citizenformData, pinCode: e.target.value });
      },
    },
  ];

  //handle submit for citizen register
  const handleSignUpforcitizen = async () => {
    if (isLoading) return;

    setisLoading(true);
    try {
      const imgData = { image: evidence[0] };
      const mergedObj = { ...citizenformData, ...imgData };
      const res = await registerCitizen(mergedObj);

      toast.success("Citizen registration successful!");
      console.log("handleSignUpforcitizen Response:", res);
      setTimeout(() => {
        navigation("/user/login");
      }, 1500);

    } catch (error) {
      console.error("Error in handleSignUpforcitizen:", error);
      toast.error(error.message || "Failed to register. Please try again.");
    } finally {
      setisLoading(false);
    }
  };

  const [policeformData, setpoliceformData] = useState({
    fullName: "",
    designation: "",
    email: "",
    phoneNumber: "",
    password: "Test",
    cpassword: "Test",
    stationCode: "",
  });

  const policeformFields = [
    {
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      value: policeformData.fullName,
      onchange: (e) => {
        setpoliceformData({ ...policeformData, fullName: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your designation",
      name: "designation",
      value: policeformData.designation,
      onchange: (e) => {
        setpoliceformData({ ...policeformData, designation: e.target.value });
      },
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      value: policeformData.email,
      onchange: (e) => {
        setpoliceformData({ ...policeformData, email: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
      value: policeformData.phoneNumber,
      onchange: (e) => {
        setpoliceformData({ ...policeformData, phoneNumber: e.target.value });
      },
    },
    // {
    //   type: "password",
    //   placeholder: "Enter your Password",
    //   name: "password",
    //   value:policeformData.password,
    //   onchange : (e) =>{
    //     setpoliceformData({...policeformData,password:e.target.value})
    //   }
    // },
    // {
    //   type: "password",
    //   placeholder: "Enter your Confirm Password",
    //   name: "cpassword",
    //   value:policeformData.cpassword,
    //   onchange : (e) =>{
    //     setpoliceformData({...policeformData,cpassword:e.target.value})
    //   }
    // },
    {
      type: "number",
      placeholder: "Enter your Station Code",
      name: "stationCode",
      value: policeformData.stationCode,
      onchange: (e) => {
        setpoliceformData({ ...policeformData, stationCode: e.target.value });
      },
    },
  ];

  //handlesubmit for police register
  const handleSignUpforPolice = async () => {
    if (isLoading) return;

    setisLoading(true);
    try {
      const res = await registerPolice(policeformData);
      toast.success("Police registration successful!");
      console.log("handleSignUpforPolice Response:", res);
      setTimeout(() => {
        navigation("/user/login");        
      }, 1500);

    } catch (error) {
      console.error("Error in handleSignUpforPolice:", error);
      toast.error(error.message || "Failed to register. Please try again.");
    } finally {
      setisLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row h-screen overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        style={{ overflow: "auto" }}
        className="container w-full md:w-1/2 flex justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LeftFormRegister
          formFields={isCitizen ? citizenformFields : policeformFields}
          setCitizen={setCitizen}
          isCitizen={isCitizen}
          isUser={false}
          handleFileChange={handleFileChange}
          evidence={evidence}
          handleSignUpforPolice={handleSignUpforPolice}
          handleSignUpforcitizen={handleSignUpforcitizen}
          isLoading={isLoading}
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="hidden md:block w-1/2 overflow-hidden bg-primary rounded-tl-[7%] rounded-bl-[7%]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Right />
      </motion.div>

      <ToastContainer />
    </motion.div>
  );
}
