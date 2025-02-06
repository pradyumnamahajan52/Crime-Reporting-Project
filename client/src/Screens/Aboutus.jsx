import React from 'react'
import aboutus from '../assets/images/aboutus.png'

export default function Aboutus() {
  return (
    <div>
      
            <section class="bg-gray-100 transition-transform transform hover:scale-105">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div class="max-w-lg">
                      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                      <p class="mt-4 text-gray-600 text-lg">At Crime Reporting System, we are dedicated to empowering individuals and communities to take a stand against crime. Our platform provides a safe, 
                        secure, and user-friendly way to report crimes, locate assistance, and access valuable resources.</p>
      
                        <p class="mt-4 text-gray-600 text-lg">
      
      We believe that everyone has a role to play in creating safer neighborhoods. By fostering collaboration between citizens and law enforcement, we aim to bridge the gap and ensure justice is within reach for all.</p>
                        <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md ">Mission: To create a secure and easy platform for reporting crimes and fostering community safety</p>
                        <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md ">Purpose: Empower citizens to take action against crime and ensure their voices are heard.</p>
                        <p className="mt-8 text-base px-2 bg-[#E3E0F2] rounded-md ">Security: Ensure complete confidentiality and safety of user-submitted information.</p>
                      <div class="mt-8">
                          
                      </div>
                  </div>
                  <div class="mt-12 md:mt-0 ">
                      <img className="h-[400px] w-[550px] rounded-lg transition-transform transform hover:scale-105 " src={aboutus} alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}
