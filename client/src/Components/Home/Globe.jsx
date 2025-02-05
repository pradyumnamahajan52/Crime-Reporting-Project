import React from 'react'
import person from '../../assets/images/Home/p.png'
import globe from '../../assets/images/Home/globe.png'
import vid from '../../assets/videos/globe.mp4'
export default function Globe() {
  return (
    <div>
     <div className="flex flex-col items-center justify-center min-h-screen p-8">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold">
      One Portal Gives Essential Safety Services in One Place.
    </h1>
  </div>
  <div className="flex flex-wrap justify-center gap-8">
    {/* Crime Reporting Section */}
    <div className="bg-primary h-[400px] w-[500px] text-white p-8 rounded-3xl flex flex-col items-center shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-4">Report Crime Faster</h2>
      <div className="flex flex-col items-center mt-4">
        <img src={person} alt="Police" className="w-40 h-40" />
      </div>
    </div>

    {/* Global Communication Section */}
    <div className="bg-white text-gray-900 p-8 rounded-bl-3xl shadow-lg w-80 flex flex-col items-center transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-6">Send Across The Globe!</h2>
      <div className="flex items-center justify-center w-36 h-36 border-4 border-blue-500 rounded-full">
        <video src={vid} autoPlay loop muted className="w-full h-auto"></video>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
