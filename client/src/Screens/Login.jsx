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
      

    },

    {
        type : "password",
        placeholder : "Enter OTP",
        name : "password",
        label : "Otp"
     


    },
   


]
  return (


  
<div  className="flex flex-col md:flex-row h-screen overflow-hidden">

<div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0 -mt-6 md:-mt-10">
<LeftForm formFields = {formFields} isUser={true} />
</div>

<div className="hidden md:block w-1/2 bg-primary rounded-tl-[7%] rounded-bl-[7%] p-6">

   <Right /> 
</div>
</div>
  )
}




