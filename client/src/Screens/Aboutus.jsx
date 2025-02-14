import React from 'react'
import aboutus from '../assets/images/aboutus.png'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Aboutus() {
  const navigate = useNavigate();
  return (
    <div className="w-full overflow-hidden">
    <section className="bg-gray-100 transition-transform transform  overflow-x-hidden">
      <div className="container mx-auto  py-10 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p className="mt-4 text-gray-600 text-lg text-justify">
              At Crime Reporting System, we are dedicated to empowering individuals and communities to take a stand against crime. 
              Our platform provides a safe, secure, and user-friendly way to report crimes, locate assistance, and access valuable resources.
            </p>
            <p className="mt-4 text-gray-600 text-lg text-justify">
              We believe that everyone has a role to play in creating safer neighborhoods. 
              By fostering collaboration between citizens and law enforcement, we aim to bridge the gap and ensure justice is within reach for all.
            </p>
            <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md">
              <strong>Mission:</strong> To create a secure and easy platform for reporting crimes and fostering community safety.
            </p>
            <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md">
              <strong>Purpose:</strong> Empower citizens to take action against crime and ensure their voices are heard.
            </p>
            <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md">
              <strong>Security:</strong> Ensure complete confidentiality and safety of user-submitted information.
            </p>
          </div>
          <div className="mt-12 md:mt-0 flex justify-center">
            <img 
              className="h-[400px] w-full max-w-[550px] object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" 
              src={aboutus} 
              alt="About Us Image" 
            />
          </div>
          <button style={{marginRight:"400px"}} class="text-blue-600 hover:underline focus:outline-none ml-30 " 
          onClick={()=>{navigate("/about")}}>
  See More about us →
</button>
        </div>
      </div>
    </section>
  </div>
  
  )
}
