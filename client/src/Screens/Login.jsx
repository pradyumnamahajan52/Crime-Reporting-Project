import React from 'react'
import LeftForm from '../Components/Register_Login.jsx/LeftFormLogin'
import Right from '../Components/Register_Login.jsx/Right'

export default function Login() {
  const formFields = [
       
    {
        type : "text",
        placeholder : "Enter Email/Phone number",
        name : "email",
        label : "Email/phone number"
        // icon : <MdOutlineEmail />

    },

    {
        type : "password",
        placeholder : "Enter OTP",
        name : "password",
        label : "Otp"
        // icon : <GoLock />


    },
   


]
  return (


  
<div  className="flex h-screen overflow-hidden">

<div className="w-1/2 flex justify-center items-center -mt-10">
<LeftForm formFields = {formFields} isUser={true} />
</div>

<div className="w-1/2  bg-primary rounded-tl-[7%] rounded-bl-[7%]">

   <Right /> 
</div>
</div>
  )
}




