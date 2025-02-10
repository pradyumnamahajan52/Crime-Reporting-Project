import { Suspense, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";
import { motion } from "framer-motion";

const ReportDetailsCard = ({
  data,
  fetchEvidences,
  setShowCrimeStatusModal,
}) => {
  console.log(data);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="px-6 py-4">
          <h1 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-3">
            Crime Report Details
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold text-lg mb-1">
                📅 Date:
              </p>
              <p className="text-gray-600 text-base">{data.crimeDate}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-semibold text-lg mb-1">
                Category:
              </p>
              <p className="text-gray-600 text-base">
                {data.category + " " + data.subCategory}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Current Reports Status:
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {data.reportStatus}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Description:
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              📍 Crime Location:
            </p>
            <p className="text-gray-600 text-base">
              {[
                data.addressLine1,
                data.addressLine2,
                data.city,
                data.state,
                data.country,
                data.pinCode,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Police Station:
            </p>
            <p className="text-gray-600 text-base mb-1">
              {data.stationName || "Not Assigned"}
            </p>
          </div>

          <div className="flex justify-end mt-3 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              onClick={() => fetchEvidences(data?.crimeReportId)}
              className="w-full sm:w-auto text-white rounded-lg px-4 py-2.5 bg-primary hover:bg-primary-dark"
            >
              See Evidences
            </button>

            <button
              type="button"
              onClick={() => setShowCrimeStatusModal(true)}
              className="w-full sm:w-auto text-white rounded-lg px-4 py-2.5 bg-primary hover:bg-primary-dark"
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CrimeReportsDetail = () => {
  const { reportDetails } = useLoaderData();
  const [crimeReportId, setCrimeReportId] = useState(null);
  const [evidences, setEvidences] = useState([]);
  const [showCrimeStatusModal, setShowCrimeStatusModal] = useState(false);
  const crimeStatuses = [
    "SUBMITTED",
    "ACKNOWLEDGED",
    "REJECTED",
    "PENDING_ADDITIONAL_INFO",
    "RECEIVED",
    "UNDER_INVESTIGATION",
    "ON_HOLD",
    "RESOLVED",
    "CLOSED",
  ];

  const fetchEvidences = async (reportId) => {
    try {
      const formData = new FormData();
      formData.append("crimeReportId", reportId);

      const token = getAuthToken();
      const response = await fetch(`${API}/police/get-evidence`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch evidences");
      }

      const data = await response.json();
      setEvidences(data.data);
    } catch (error) {
      console.error("Error fetching evidences:", error.message);
    }
  };

  const updateStatus = async (reportId, status) => {
    try {
      const formData = new FormData();
      formData.append("crimeReportId", reportId);
      formData.append("status", status);

      const token = getAuthToken();
      const response = await fetch(`${API}/police/update-crime-status`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update reports status");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error updating report status:", error.message);
    }
  };

  return (
    <motion.div
      className="w-full min-h-screen p-6 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Suspense fallback={<Spinner />}>
        <Await resolve={reportDetails}>
          {(data) => {
            setCrimeReportId(data.data.crimeReportId);
            return (
              <ReportDetailsCard
                data={data.data}
                fetchEvidences={fetchEvidences}
                setShowCrimeStatusModal={setShowCrimeStatusModal}
              />
            );
          }}
        </Await>
      </Suspense>
      {evidences.length > 0 && (
        <div className="flex justify-center items-center mt-6">
          <div className="bg-white rounded-lg w-2/3 p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Evidences
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {evidences.map((evidence, index) => (
                <img
                  key={index}
                  src={evidence}
                  alt={`Evidence ${index + 1}`}
                  className="w-full h-60 border rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {showCrimeStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Update Crime Status</h2>
            <ul>
              {crimeStatuses.map((status, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => updateStatus(crimeReportId, status)}
                    className="w-full text-left p-2 border rounded hover:bg-gray-100"
                  >
                    {status}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowCrimeStatusModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CrimeReportsDetail;
