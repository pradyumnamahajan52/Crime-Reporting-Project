import React from 'react';
import TopBar from '../../Components/Dashboard/Topbar/TopBar';

const CrimeGraph = () => {
  return (
    <>
    <TopBar />
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Crime Graph</h2>
      <div className="h-64 bg-gray-300 rounded">Graph Placeholder</div>
    </div>
    </>
  );
}

export default CrimeGraph;
