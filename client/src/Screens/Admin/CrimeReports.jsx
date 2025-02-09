import React, { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Spinner from "../../Components/Spinner";

const getStatusColor = (status) => {
  switch (status) {
    case "SUBMITTED": return "bg-blue-100 text-blue-600";
    case "ACKNOWLEDGED": return "bg-green-100 text-green-600";
    case "REJECTED": return "bg-red-100 text-red-600";
    case "PENDING_ADDITIONAL_INFO": return "bg-yellow-100 text-yellow-600";
    case "RECEIVED": return "bg-purple-100 text-purple-600";
    case "UNDER_INVESTIGATION": return "bg-indigo-100 text-indigo-600";
    case "ON_HOLD": return "bg-orange-100 text-orange-600";
    case "RESOLVED": return "bg-teal-100 text-teal-600";
    case "CLOSED": return "bg-gray-100 text-gray-600";
    default: return "bg-red-100 text-red-600";
  }
};

export default function CrimeReports() {
  const { crimeReportsData } = useLoaderData(); // Data is still a Promise

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Crime Reports</h1>

      {/* 🔹 Suspense: Show fallback while data loads */}
      <Suspense fallback={<Spinner />}>
        <Await resolve={crimeReportsData}>
          {(crimeReports) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crimeReports.data?.map((report) => (
                <div key={report.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {report?.citizen?.user?.fullName}
                    </h2>
                    <p className="text-sm text-gray-500">{report?.citizen?.user?.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Crime Date</h3>
                    <p className="text-gray-800">{new Date(report.crimeDate).toDateString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">Description</h3>
                    <p className="text-gray-800">{report.description}</p>
                  </div>
                  <div className="mt-auto">
                    <span className={`px-4 py-1 text-sm font-medium rounded-full ${getStatusColor(report.reportStatus)}`}>
                      {report.reportStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
