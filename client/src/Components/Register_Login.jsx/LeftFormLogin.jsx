import React from 'react';
import login from '../../assets/animations/login.json'
import Lottie from "react-lottie";
import {useNavigate} from 'react-router-dom'

export default function Form({ formFields, isUser }) {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const navigate = useNavigate();

  
  return (

    <div >
     <Lottie  options={defaultOptions} height={215} width={215} />
      
      {formFields.map((item, index) => {
        return (

         <div className='-mt-5'key={index} >
          {
            item?.label && 
            <div className='mt-8'>
            <label  className='font-medium text-xl ' >{item.label}</label>
            </div>
          }

          <div key={index} className="flex items-center rounded-lg border border-2 border-primary  w-[350px] mt-4 p-[3%_6%] ">


            <input
              className="flex-grow outline-none px-2"
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              onChange={item.onChange} // Ensure `onChange` is passed correctly as a prop
            />
          </div>
          </div>
        );
      })}

      <button className="text-base bg-primary text-white rounded-lg py-3 px-[42%] mt-10">
        {isUser ? "Sign In" : "Sign Up"}
      </button>
      
      <span className="text-xl text-center mt-4 ml-6 w-[200px] mx-auto">
       <p  onClick={()=> navigate("/user/login") }>Have An Account? <span>Sign In</span> </p>
        
      </span> 

       
      
   
    </div>
      
  );
}
