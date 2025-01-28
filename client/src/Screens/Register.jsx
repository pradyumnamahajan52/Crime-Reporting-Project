import React from 'react'
import LeftFormRegister from '../Components/Register_Login.jsx/LeftFormRegister'
import Right from '../Components/Register_Login.jsx/Right'

export default function Register() {
  const formFields = [
       
    {
        type : "text",
        placeholder : "Enter your Full Name",
        name : "name"
     
        // icon : <MdOutlineEmail />

    },

    {
        type : "text",
        placeholder : "Enter your Email",
        name : "email"
     
        // icon : <GoLock />


    },
    {
        type : "text",
        placeholder : "Enter your Aadhaar Number",
        name : "aadhaar"
     
        // icon : <GoLock />


    },
    {
        type : "text",
        placeholder : "Enter your Phone Number",
        name : "phone"
     
        // icon : <GoLock />


    },
    
    {
        type : "date",
        placeholder : "Enter your Date Of Birth",
        name : "dob"
     
        // icon : <GoLock />


    },
    {
        type : "text",
        placeholder : "Enter your Full Address",
        name : "address"
     
        // icon : <GoLock />


    }
   
   


]
  return (


  
<div  className="flex h-screen overflow-hidden">

<div style={{marginTop:"-10%"}} className="w-1/2 flex justify-center items-center ">
<LeftFormRegister formFields = {formFields} isUser={false} />
</div>

<div style={{backgroundColor:"#17A2B8" , borderTopLeftRadius:"7%" , borderBottomLeftRadius:"7%"  }} className="w-1/2   ">

   <Right /> 
</div>
</div>
  )
}




