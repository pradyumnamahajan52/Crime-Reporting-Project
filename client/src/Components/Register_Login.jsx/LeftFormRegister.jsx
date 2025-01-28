import React from 'react';

import {useNavigate} from 'react-router-dom'


export default function Form({ formFields, isUser }) {



  const navigate = useNavigate();

  
  return (

    <div className='mt-20' >

      <div  >
        <h1 className='font-quicksand text-black text-3xl  ml-10 mt-10' >Create An Account</h1>
         </div>
      <div className='flex gap-8 ' > 
        <div>
        <button className="text-base bg-black text-white rounded-lg py-2 px-[57px] mt-4 ">
        Police
      </button>
        </div>
        <div>
        <button style={{border:"1.5px solid black"}} className="text-base bg-white border-black text-black rounded-lg py-2 px-[57px] mt-4">
        Admin
      </button>
        </div>
      </div>
   
      {formFields.map((item, index) => {
        return (

        
         
          <div key={index} style={{border:"1.5px solid #17A2B8" , padding:"3% 3%"}} className="flex items-center rounded-lg border-2  w-[350px] mt-4 ">


            <input
              className="flex-grow outline-none px-2"
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              onChange={item.onChange} // Ensure `onChange` is passed correctly as a prop
            />
     
          </div>
        );
      })}

      <button className="text-base bg-[#17A2B8] text-white rounded-lg py-3 px-[42%] mt-10">
        Sign up
      </button>
      
      <span className="text-xl text-center mt-2 ml-6 w-[200px] mx-auto">
   <p>Already Have An Account? <span className=' text-[#17A2B8] cursor-pointer ' onClick={()=> navigate("/user/login") } >Sign In</span> </p> 
      </span> 

   
    </div>
      
  );
}
