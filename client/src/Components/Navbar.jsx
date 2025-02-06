import React, { useState } from "react";
import { getAuthToken } from "../action/user/Auth";
import { Form, Link } from "react-router-dom";
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
          <>

          <img
            src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
            alt="Profile"
            className="w-8 h-8 rounded-full border border-white cursor-pointer"
            onClick={() => handleNavigation("/user/profile")}
          />

          <Form method="POST" action="/user/logout">
          <button type="submit"  className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded" >
            Logout
          </button>
          </Form>
</>
          // <img
          //   src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
          //   alt="Profile"
          //   className="w-8 h-8 rounded-full border"
          // />

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
