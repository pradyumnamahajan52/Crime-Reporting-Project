import React, { useState, useEffect } from 'react';
import TopBar from '../../Components/Dashboard/Topbar/TopBar';
import { useLoaderData } from 'react-router-dom';
import DashboardSpinner from '../../Components/DashboardSpinner';

const AuditLogs = () => {
  const { auditData } = useLoaderData() || {}; 
  const [logs, setLogs] = useState([]); 

  useEffect(() => {
    if (auditData?.data) {
      // console.log("Audit Data:", auditData);
      setLogs(auditData.data); 
    }
  }, [auditData]);

  if (logs.length === 0) {
    return <DashboardSpinner />; 
  }

  return (
    <>
      <TopBar />
      <div className="p-5">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-2 border border-gray-300">ID</th>
              <th className="text-start p-2 border border-gray-300">Email</th>
              <th className="text-start p-2 border border-gray-300">Message</th>
              <th className="text-start p-2 border border-gray-300">Created At</th>
            </tr>
          </thead>
          <tbody>
            {logs.length > 0 ? (
              logs.map((log) => <TableRow key={log.id} log={log} />)
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-2">No audit logs available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AuditLogs;

const TableRow = ({ log }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-2 border border-gray-300">
        <a href="#" className="text-violet-600 underline flex items-center gap-1">
          {log.id}
        </a>
      </td>
      <td className="p-2 border border-gray-300">{log.email}</td>
      <td className="p-2 border border-gray-300">{log.message}</td>
      <td className="p-2 border border-gray-300">{new Date(log.createdAt).toLocaleString()}</td>
    </tr>
  );
};
