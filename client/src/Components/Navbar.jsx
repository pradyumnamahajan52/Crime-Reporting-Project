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
import React, { useState } from "react";
import { getAuthToken } from "../action/user/Auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = getAuthToken();
  const navigate = useNavigate();
  
  // State to toggle the mobile menu, initialized to false (closed state)
  const [isOpen, setIsOpen] = useState(false);

  // Navigation handler functions
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="bg-primary shadow-lg p-4 flex items-center justify-between text-white relative">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          crimereport.live
        </h1>
      </div>

      {/* Center - Navigation Links for Larger Screens */}
      <div className="hidden md:flex space-x-6">
        <span
          className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Home
        </span>
        <span
          className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => handleNavigation("/about")}
        >
          About Us
        </span>
        <span
          className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => handleNavigation("/contact")}
        >
          Contact Us
        </span>
        <span
          className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => handleNavigation("/reports")}
        >
          Report Crime
        </span>
        <span
          className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => handleNavigation("/feedback")}
        >
          Feedback
        </span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-center space-y-4 py-4 z-50">
          <span
            className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            Home
          </span>
          <span
            className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </span>
          <span
            className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </span>
          <span
            className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={() => handleNavigation("/reports")}
          >
            Report Crime
          </span>
          <span
            className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={() => handleNavigation("/feedback")}
          >
            Feedback
          </span>
          {!token && (
            <span
              onClick={() => handleNavigation("/user/register")}
              className="text-white hover:bg-primary bg-white hover:text-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            >
              SIGNUP
            </span>
          )}
          {token && (
            <span
              onClick={() => handleNavigation("/user/login")}
              className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            >
              Login
            </span>
          )}
        </div>
      )}

      {/* Right - Profile Image or Register/Login Button */}
      <div className="flex items-center space-x-4">
        {token ? (
          <span
            onClick={() => handleNavigation("/user/login")}
            className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          >
            Login
          </span>
        ) : (
          <img
            src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-white cursor-pointer"
            onClick={() => handleNavigation("/user/profile")}
          />
        )}
        {!token && (
          <span
            onClick={() => handleNavigation("/user/register")}
            className="hover:bg-primary bg-white hover:text-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
          >
            SIGNUP
          </span>
        )}
      </div>
    </nav>
  );
}
