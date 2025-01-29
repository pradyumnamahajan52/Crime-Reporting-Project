import React, { useState } from 'react'
import LeftFormRegister from '../Components/Register_Login.jsx/LeftFormRegister'
import Right from '../Components/Register_Login.jsx/Right'

export default function Register() {
    const [isCitizen , setCitizen] = useState(true);
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
      }
     
   


]

const policeformFields = [
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
      type: "password",
      placeholder: "Enter your Confirm Password",
      name: "cpassword",
    },
    {
      type: "number",
      placeholder: "Enter your Station Code",
      name: "stationCode",
    },
  ];
  

  
  return (


  
<div  className="flex h-screen overflow-hidden">

<div style={{marginTop:"-10%"}} className="w-1/2 flex justify-center items-center ">
<LeftFormRegister formFields = {isCitizen ? citizenformFields : policeformFields } setCitizen={setCitizen}  isCitizen={isCitizen} isUser={false} />

</div>

<div style={{backgroundColor:"#17A2B8" , borderTopLeftRadius:"7%" , borderBottomLeftRadius:"7%"  }} className="w-1/2   ">

   <Right /> 
</div>
</div>
  )
}




