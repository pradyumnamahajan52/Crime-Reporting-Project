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

<div style={{marginTop:"-10%"}} className="w-1/2 flex justify-center items-center ">
<LeftForm formFields = {formFields} isUser={true} />
</div>

<div style={{backgroundColor:"#17A2B8" , borderTopLeftRadius:"7%" , borderBottomLeftRadius:"7%"}} className="w-1/2  ">

   <Right /> 
</div>
</div>
  )
}




