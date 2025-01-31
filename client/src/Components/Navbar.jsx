// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="text-gray-400 bg-gray-900 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         {/* Brand Logo and Title */}
//         <a
//           href="/"
//           className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//           </svg>
//           <span className="ml-3 text-xl">Crime Reporting</span>
//         </a>
//         {/* Navigation Links */}
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-white" href="/">
//             Home
//           </a>
//           <a className="mr-5 hover:text-white" href="/about">
//             Register a Complain
//           </a>
//           <a className="mr-5 hover:text-white" href="/contact">
//             Track Your Complain 
//           </a>
//           <a className="mr-5 hover:text-white" href="/about">
//             About 
//           </a>
//           <a className="mr-5 hover:text-white" href="/contact">
//             Contact Us
//           </a>
//           <a className="mr-5 hover:text-white" href="/admin">
//             Admin
//           </a>
//         </nav>
//         {/* Call-to-Action Button */}
//         <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
//           Button
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             className="w-4 h-4 ml-1"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7"></path>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <img src="https://tailwindcss.com/favicons/favicon.ico" alt="Logo" className="w-6 h-6" />
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-6">
        <button className="bg-gray-100 text-black font-semibold px-4 py-2 rounded-lg">
          Dashboard
        </button>
        <button className="text-black font-medium hover:text-gray-500">
          Team
        </button>
        <button className="text-black font-medium hover:text-gray-500">
          Projects
        </button>
        <button className="text-black font-medium hover:text-gray-500">
          Calendar
        </button>
      </div>

      {/* Right - Search, Bell Icon, Profile Image */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <span className="absolute left-3 top-2 text-gray-400">
            🔍
          </span>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          🔔
        </button>

        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </nav>
  );
}
