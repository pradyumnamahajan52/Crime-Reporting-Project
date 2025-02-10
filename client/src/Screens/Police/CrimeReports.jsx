import React, { Suspense } from "react";
import { useLoaderData, Await, useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { getStatusColor } from "../../utils/getCrimeReportStatusColor";

export default function CrimeReports() {
  const { crimeReportsData } = useLoaderData(); // Data is still a Promise
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Crime Reports
      </h1>

      {/* 🔹 Suspense: Show fallback while data loads */}
      <Suspense fallback={<Spinner />}>
        <Await resolve={crimeReportsData}>
          {(crimeReports) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crimeReports.data?.map((report) => (
                <div
                  key={report.id}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col  content-between gap-2   space-y-4 h-full"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {report?.citizen?.user?.fullName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {report?.citizen?.user?.email}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Crime Date
                    </h3>
                    <p className="text-gray-800">
                      {new Date(report.crimeDate).toDateString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Description
                    </h3>
                    <p className="text-gray-800">{report.description}</p>
                  </div>
                  <div className="mt-auto">
                    <span
                      className={`px-4 py-1 text-sm font-medium rounded-full ${getStatusColor(
                        report.reportStatus
                      )}`}
                    >
                      {report.reportStatus}
                    </span>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button type="button" onClick={() => navigate(`/police/report-details/${report.id}`)} className="px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded">
                      View Report Details
                    </button>
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
