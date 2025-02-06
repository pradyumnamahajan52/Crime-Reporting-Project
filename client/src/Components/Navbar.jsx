import React, { useState } from "react";
import { getAuthToken } from "../action/user/Auth";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const token = getAuthToken();
  const navigate = useNavigate();
 
  console.log('====================================');
  console.log(token);
  console.log('====================================');
  
  // State to toggle the mobile menu, initialized to false (closed state)
  const [isOpen, setIsOpen] = useState(false);

  // Navigation handler functions
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the menu when a link is clicked
  };





  return (
 
        <nav className="bg-primary shadow-lg p-4 flex items-center justify-between text-white relative w-full">
          {/* Left - Logo */}
          <div className="text-xl font-bold cursor-pointer" onClick={() => handleNavigation("/")}>crimereport.live</div>
          
          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              { label: "Report Crime", path: "/reports" },
              { label: "Feedback", path: "/feedback" }
            ].map((item) => (
              <span
                key={item.path}
                className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </span>
            ))}
          </div>
    
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>☰</button>
          </div>
          
          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-primary text-white flex flex-col items-center space-y-4 py-4 z-50">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
                { label: "Report Crime", path: "/reports" },
                { label: "Feedback", path: "/feedback" }
              ].map((item) => (
                <span
                  key={item.path}
                  className="text-white hover:bg-white hover:text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.label}
                </span>
              ))}
              {/* Auth Buttons in Mobile Menu */}
              <div className="flex flex-col space-y-2 mt-2">
                {token ? (
                  <img
                    src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-white cursor-pointer"
                    onClick={() => handleNavigation("/user/profile")}
                  />
                ) : (
                  <>
                    <span
                      onClick={() => handleNavigation("/user/login")}
                      className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer hover:bg-primary hover:text-white"
                    >
                      LOGIN
                    </span>
                    <span
                      onClick={() => handleNavigation("/user/register")}
                      className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer hover:bg-primary hover:text-white"
                    >
                      SIGNUP
                    </span>
                  </>
                )}
              </div>
            </div>
          )}
          
          {/* Right - Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {token ? (
              <img
                src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-white cursor-pointer"
                onClick={() => handleNavigation("/user/profile")}
              />
            ) : (
              <div className="flex space-x-2">
                <span
                  onClick={() => handleNavigation("/user/login")}
                  className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer hover:bg-primary hover:text-white"
                >
                  LOGIN
                </span>
                <span
                  onClick={() => handleNavigation("/user/register")}
                  className="bg-white text-primary font-semibold px-4 py-2 rounded-lg transition cursor-pointer hover:bg-primary hover:text-white"
                >
                  SIGNUP
                </span>
              </div>
            )}
          </div>
        </nav>
  );
}
