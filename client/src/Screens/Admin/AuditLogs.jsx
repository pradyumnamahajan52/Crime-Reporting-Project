import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import TopBar from '../../Components/Dashboard/Topbar/TopBar';
import DashboardSpinner from '../../Components/DashboardSpinner';
import Spinner from '../../Components/Spinner';

const AuditLogs = () => {
  const { auditData } = useLoaderData(); // Use auditData directly

  return (
    <>
      <TopBar />
      <div className="p-5">
        {/* 🔹 Suspense: Show spinner while data loads */}
        <Suspense fallback={<Spinner />}>
          <Await resolve={auditData}>
            {(logs) => (
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
                  {logs.data?.length > 0 ? (
                    logs.data.map((log) => <TableRow key={log.id} log={log} />)
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center p-2">No audit logs available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default AuditLogs;

//  Table Row Component
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
      <td className="p-2 border border-gray-300">
        {log.createdAt ? new Date(log.createdAt).toLocaleString() : "N/A"}
      </td>
    </tr>
  );
};
