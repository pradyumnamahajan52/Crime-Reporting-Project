import React, { useState } from "react";

const CrimeReports = () => {
  // Sample crime reports data
  const [crimeReports,setCrimeReports] = useState([
    {
      id: 1,
      citizen: { fullName: "Paravaj Malik", email: "paravaj.malik@gmail.com" },
      policeStation: "Hinjawadi Police Station",
      reportStatus: "ACKNOWLEDGED",
      crimeDate: "2025-01-25",
      description: "A theft occurred at Hinjawadi IT Park.",
    },
    {
      id: 2,
      citizen: { fullName: "ram varma", email: "ram.varma@gmail.com" },
      policeStation: "Wakad Police Station",
      reportStatus: "PENDING",
      crimeDate: "2025-01-26",
      description: "Burglary reported in Wakad residential area.",
    },
    {
      id: 3,
      citizen: { fullName: "Pratik", email: "pratik@gmail.com" },
      policeStation: "Baner Police Station",
      reportStatus: "ON_HOLD",
      crimeDate: "2025-01-28",
      description: "Hit and run reported near Baner road.",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "ACKNOWLEDGED":
        return "bg-green-100 text-green-600";
      case "PENDING":
        return "bg-yellow-100 text-yellow-600";
      case "ON_HOLD":
        return "bg-orange-100 text-orange-600";
      case "CLOSED":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-red-100 text-red-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Crime Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crimeReports.map((report) => (
          <div
            key={report.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {report.citizen.fullName}
              </h2>
              <p className="text-sm text-gray-500">{report.citizen.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">Police Station</h3>
              <p className="text-gray-800">{report.policeStation}</p>
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
              <span
                className={`px-4 py-1 text-sm font-medium rounded-full ${getStatusColor(
                  report.reportStatus
                )}`}
              >
                {report.reportStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrimeReports;
