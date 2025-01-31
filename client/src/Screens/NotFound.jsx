import React from 'react'
import robotimg from '../../src/assets/animations/notFound.json'
import Lottie from "react-lottie";

import {useNavigate} from 'react-router-dom'
import login from '../Screens/Login'


export default function NotFound() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: robotimg,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const navigate = useNavigate();
  return (

    <div className="mt-10">
      <Lottie   options={defaultOptions} height={400} width={400} />
      <p className="font-quicksand text-black text-xl mt-3 text-center  ">
         The Page you are looking for is not register by us.
        </p>

        <button onClick={()=> navigate("/")} style={{ marginLeft:"36%"}} className="text-base bg-[#17A2B8] text-white rounded-lg py-3 px-[10%] mt-10 text-center ">
          Go to Home Page  
      </button>
    </div>

  )
}
