import React, { useState } from "react";
import LeftFormRegister from "../Components/Register_Login.jsx/LeftFormRegister";
import Right from "../Components/Register_Login.jsx/Right";
import {toast} from 'react-toastify'
import { ToastContainer } from "react-toastify";
import { registerCitizen, registerPolice } from "../Services/action/Login";

export default function Register() {
 
  const [isCitizen, setCitizen] = useState(true);
  const [isLoading,setisLoading] =useState(false)

  const [evidence, setEvidence] = useState([]);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidence(files);
  };


  const [citizenformData , setCitizenformData] =useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    cpassword: '',
    dateOfBirth:'',
    cardNumber:'',
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    country:'',
    pinCode:''

  })

  const citizenformFields = [
    {
      type: "text",
      placeholder: "Enter your Full Name",
      name: "fullName",
      value:citizenformData.fullName,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,fullName:e.target.value})
      }

    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      value:citizenformData.email,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,email:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
      value:citizenformData.phoneNumber,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,phoneNumber:e.target.value})
      }
    },
    {
      type: "password",
      placeholder: "Enter your Password",
      name: "password",
      value:citizenformData.password,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,password:e.target.value})
      }
    },
    {
      type: "password",
      placeholder: "Enter Confirm Password",
      name: "cpassword",
      value:citizenformData.cpassword,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,cpassword:e.target.value})
      }
    },
    {
      type: "date",
      placeholder: "Enter your Date of Birth",
      name: "dateOfBirth",
      value:citizenformData.dateOfBirth,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,dateOfBirth:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your Card Number",
      name: "cardNumber",
      value:citizenformData.cardNumber,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,cardNumber:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your address Line 1",
      name: "addressLine1",
      value:citizenformData.addressLine1,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,addressLine1:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your address Line 2",
      name: "addressLine2",
      value:citizenformData.addressLine2,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,addressLine2:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your City",
      name: "city",
      value:citizenformData.city,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,
          city:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your state",
      name: "state",
      value:citizenformData.state,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,
          state:e.target.value})
      }
    },

    {
      type: "text",
      placeholder: "Enter your country",
      name: "country",
      value:citizenformData.country,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,
          country:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your pinCode",
      name: "pinCode",
      value:citizenformData.pinCode,
      onchange : (e) =>{
        setCitizenformData({...citizenformData,pinCode:e.target.value})
      }
    },
  ];

  //handle submit for citizen register
  const handleSignUpforcitizen = async ()=>{
    try {
      if(citizenformData.password !== citizenformData.cpassword){
        toast.warning("password did not match")
      }
      else{
        toast.success("citizen registration succesfully")
        console.log(citizenformData)
        console.log(evidence)
        const imgData = { image: evidence[0]}; 
        const mergedObj = { ...citizenformData, ...imgData };
        console.log(mergedObj)
        const res = await registerCitizen(mergedObj)
        console.log(res)
      }
    } catch (error) {
      return error
    }
  }
  


  const [policeformData , setpoliceformData] =useState({
    name: '',
    designation: '',
    email: '',
    phoneNumber: '',
    password:'',
    cpassword:'',
    stationCode:''



  })


  const policeformFields = [
    {
      type: "text",
      placeholder: "Enter your name",
      name: "name",
      value:policeformData.name,
      onchange : (e) =>{
        setpoliceformData({...policeformData,name:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your designation",
      name: "designation",
      value:policeformData.designation,
      onchange : (e) =>{
        setpoliceformData({...policeformData,designation:e.target.value})
      }
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      name: "email",
      value:policeformData.email,
      onchange : (e) =>{
        setpoliceformData({...policeformData,email:e.target.value})
      }
    },
    {
      type: "text",
      placeholder: "Enter your Phone Number",
      name: "phoneNumber",
      value:policeformData.phoneNumber,
      onchange : (e) =>{
        setpoliceformData({...policeformData,phoneNumber:e.target.value})
      }
    },
    {
      type: "password",
      placeholder: "Enter your Password",
      name: "password",
      value:policeformData.password,
      onchange : (e) =>{
        setpoliceformData({...policeformData,password:e.target.value})
      }
    },
    {
      type: "password",
      placeholder: "Enter your Confirm Password",
      name: "cpassword",
      value:policeformData.cpassword,
      onchange : (e) =>{
        setpoliceformData({...policeformData,cpassword:e.target.value})
      }
    },
    {
      type: "number",
      placeholder: "Enter your Station Code",
      name: "stationCode",
      value:policeformData.stationCode,
      onchange : (e) =>{
        setpoliceformData({...policeformData,stationCode:e.target.value})
      }
    },
  ];
 

  //handlesubmit for police register
  const handleSignUpforPolice = async ()=>{
    if(isLoading) return
    console.log("signup clicked")
    console.log(policeformData)
    try {
      setisLoading(true)
      if(policeformData.password !== policeformData.cpassword){
        toast.warning("Password did not match")
      }
      else{
        const res = await registerPolice(policeformData)
        console.log(res)
        // toast.success("police registration sucessfully")
      }
    } catch (error) {
      return error
    }
    finally{
      setisLoading(false)
    }
  }

  return (

    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div
        style={{overflow:'auto'}}
        className={`container w-full md:w-1/2 flex justify-center`}
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
      </div>

      <div
      
        className="hidden md:block w-1/2 overflow-hidden bg-primary rounded-tl-[7%] rounded-bl-[7%]"
      >
       <Right />
      </div>
      <ToastContainer/>
    </div>
  );
}
