import { Suspense, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

const ReportDetailsCard = ({ data, fetchEvidences }) => {
  console.log("====================================");
  console.log(data);
  console.log("====================================");

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="px-6 py-4">
          {/* Title */}
          <h1 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-3">
            Crime Report Details
          </h1>

          {/* Crime Date and Category */}
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

          {/* Description */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Description:
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Location */}
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

          {/* Police Station */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700 font-semibold text-lg mb-2">
              Police Station:
            </p>
            <p className="text-gray-600 text-base mb-1">
              {data.stationName || "Not Assigned"}
            </p>
            <p className="text-gray-600 text-base">
              {[
                data.stationAddressLine1,
                data.stationAddressLine2,
                data.stationCity,
                data.stationState,
                data.stationCountry,
                data.stationPinCode,
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>
          <div className="flex justify-end mt-3 items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => fetchEvidences(data?.crimeReportId)}
              className="w-full  sm:w-auto focus:ring-4 focus:outline-none  text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  hover:bg-primary bg-primary"
            >
              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text font-semibold">
                  See Evidences
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CrimeReportsDetail = () => {
  const { reportDetails } = useLoaderData();
  const [evidences, setEvidences] = useState([]);


  const fetchEvidences = async (reportId) => {
    try {
      const formData = new FormData();
      formData.append("crimeReportId", reportId);

      const token = getAuthToken();
      const response = await fetch(`${API}/crimereport/get-evidence`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  return (
    <div className="bg-gray-100 min-h-screen py-8 space-y-8">
      <Suspense fallback={<Spinner />}>
        <Await resolve={reportDetails}>
          {(data) => (
            <ReportDetailsCard
              data={data.data}
              fetchEvidences={fetchEvidences}
            />
          )}
        </Await>
      </Suspense>


      {evidences.length > 0  && (
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg w-2/3 p-6 shadow-lg relative">

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Evidences
            </h2>


              <div className="grid grid-cols-2 gap-4">
                {evidences.map((evidence, index) => {
                  console.log('====================================');
                  console.log(evidence);
                  console.log('====================================');
                  return (
                  <img
                    key={index}
                    src={evidence}
                    alt={`Evidence ${index + 1}`}
                    className="w-full h-60 border rounded-lg"
                  ></img>)
})}
              </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default CrimeReportsDetail;
