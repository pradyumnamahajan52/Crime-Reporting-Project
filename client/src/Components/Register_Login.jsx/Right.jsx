import React from 'react'
import designimg from '../../assets/images/Vector.png'
import policeimg from '../../assets/images/Police.png'


export default function Right() {
  return (
    <div  className="flex mt-20  h-screen relative ml-[20%]">
      <div className="text-left">
        <h1 className="font-quicksand text-white text-4xl  " >
          Report and Seek Justice.
        </h1>
        <h1 className="font-quicksand text-white text-4xl mt-3  " >
    
        ”
        </h1>
        <p className="font-quicksand text-white text-xl mt-3  ">
          Securely log in to report and track  incidents <br /> anytime, anywhere.
        </p>

        <div  >
        <img src={policeimg} className='h-[47%] w-[47%] ml-20 mt-10' />
      </div>

        
      </div>
      <div style={{left:"-25%"}} className='absolute left-[-25%] bottom-20  ' >
        <img  src={designimg} className='h-[130px] w-[130px] ' />
      </div>
    </div>
  );
}
