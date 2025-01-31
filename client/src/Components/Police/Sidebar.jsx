import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Police Panel</h1>
      <ul className="space-y-4">
        <li><a href="/feedback" className="hover:bg-gray-700 p-2 rounded">Feedback</a></li>
        <li><a href="/audit-log" className="hover:bg-gray-700 p-2 rounded">Audit Log</a></li>
        <li><a href="/crime-graph" className="hover:bg-gray-700 p-2 rounded">Crime Graph</a></li>
        <li><a href="/extra" className="hover:bg-gray-700 p-2 rounded">Extra Functionalities</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
