import React, { useState } from "react";
import LeftFormRegister from "../Components/Register_Login.jsx/LeftFormRegister";
import Right from "../Components/Register_Login.jsx/Right";
import styles from "./Register.module.css";
import {toast} from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { registerPolice } from "../Services/action/Login";

export default function Register() {
  const [isCitizen, setCitizen] = useState(true);
   const [isLoading,setIsLoading] =useState(false)
  const [evidence, setEvidence] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidence(files);
  };

  const [citizenFormData, setCitizenFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    dateOfBirth: "",
    cardNumber: "",
    addressline1:"",
    addressline2:"",
    city:"",
    state:"",
    country:"",
    pincode:"",
  });

  const citizenformFields = [
    {
      type: "text",
      placeholder: "Enter your Full Name",
      name: "fullName",
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
    },
    {
      type: "password",
      placeholder: "Enter your Password",
      name: "password",
    },
    {
      type: "date",
      placeholder: "Enter your Date of Birth",
      name: "dateOfBirth",
    },
    {
      type: "text",
      placeholder: "Enter your Card Number",
      name: "cardNumber",
    },
    {
      type: "text",
      placeholder: "Enter your Address line 1",
      name: "addressline1",
    },
    {
      type: "text",
      placeholder: "Enter your Address line 2",
      name: "addressline2",
    },
    {
      type: "text",
      placeholder: "Enter your City",
      name: "city",
    },
    {
      type: "text",
      placeholder: "Enter your State",
      name: "state",
    },
    {
      type: "text",
      placeholder: "Enter your Country",
      name: "country",
    },
    {
      type: "text",
      placeholder: "Enter your pincode",
      name: "pincode",
    },
  ];

  const [policeformData, setPoliceFormdata] = useState({
    name: "",
    designation: "",
    phoneNumber: "",
    email: "",
    password: "",
    cpassword: "",
    stationCode: "",
  });

  const policeformFields = [
    {
      type: "text",
      placeholder: "Enter your Name",
      name: "name",
      value: policeformData.name,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, name: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your Designation",
      name: "designation",
      value: policeformData.designation,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, designation: e.target.value });
      },
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      value: policeformData.email,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, email: e.target.value });
      },
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
      value: policeformData.phoneNumber,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, phoneNumber: e.target.value });
      },
    },
    {
      type: "password",
      placeholder: "Enter your Password",
      name: "password",
      value: policeformData.password,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, password: e.target.value });
      },
    },
    {
      type: "password",
      placeholder: "Enter your Confirm Password",
      name: "cpassword",
      value: policeformData.cpassword,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, cpassword: e.target.value });
      },
    },
    {
      type: "number",
      placeholder: "Enter your Station Code",
      name: "stationCode",
      value: policeformData.stationCode,
      onchange: (e) => {
        setPoliceFormdata({ ...policeformData, stationCode: e.target.value });
      },
    },
  ];

  const handleSignUpforPolice = async () => {
    //loading state needs to implement 
    console.log("signuup clicked");
    console.log(policeformData);
    if(policeformData.password !== policeformData.cpassword){
        toast.warning("password did not match")
    }
    else{
         try {
           const res = await registerPolice(policeformData) 
           console.log(res)
         } catch (error) {
            return error
         }
       // toast.success("Police Registered Successfully")
    }
  };

  return (
    <div className="flex h-screen overflow-hidden ">
      <div
        className={`${styles.container} w-1/2 flex justify-center items-center`}
        style={{ overflow: "auto" }}
      >
        <LeftFormRegister
          formFields={isCitizen ? citizenformFields : policeformFields}
          setCitizen={setCitizen}
          isCitizen={isCitizen}
          isUser={false}
          handleFileChange={handleFileChange}
          evidence={evidence}
          handleSignUpforPolice={handleSignUpforPolice}
        />
      </div>

      <div
        style={{
          backgroundColor: "#17A2B8",
          borderTopLeftRadius: "7%",
          borderBottomLeftRadius: "7%",
        }}
        className="w-1/2  overflow-hidden "
      >
        <Right />
      </div>
      <ToastContainer/>
    </div>
  );
}
