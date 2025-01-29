import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-4 text-center border-b border-gray-700">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-6">
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Users
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Reports
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
