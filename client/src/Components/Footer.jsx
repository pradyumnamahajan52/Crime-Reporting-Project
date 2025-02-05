import { Typography } from "@material-tailwind/react";
 import React from "react";
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full bg-primary text-white py-8">
  <div className="mx-auto w-full max-w-7xl px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-4">Crime Reporting Portal</h2>
        <p className="text-gray-200">
          Your safety is our priority. Report crimes quickly and securely through our portal.
          Get real-time updates and assistance from law enforcement.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {LINKS.map(({ title, items }) => (
          <ul key={title}>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">{title}</h3>
            {items.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-200 py-1.5 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
    <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-400 pt-4">
      <p className="text-gray-200">
        &copy; {new Date().getFullYear()} Crime Reporting Portal. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        {/* Social Media Icons */}
        {["facebook", "twitter", "instagram"].map((platform) => (
          <a
            key={platform}
            href="#"
            className="text-gray-300 hover:text-white transition-opacity"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* Insert correct SVG path for each platform */}
              <path d="..." />
            </svg>
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
}