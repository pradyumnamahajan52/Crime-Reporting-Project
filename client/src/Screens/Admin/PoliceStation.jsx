import React, { Suspense } from "react";
import { useLoaderData, useNavigate, Await } from "react-router-dom"; // Import for Suspense and Await
import { FiEdit, FiTrash } from "react-icons/fi";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import Spinner from "../../Components/Spinner"; // Import the spinner

const PoliceStation = () => {
  const { policeStationData } = useLoaderData(); // Fetch data from loader
  const navigate = useNavigate(); // Initialize navigation

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this police station?")) {
      console.log(`Deleting police station with ID: ${id}`);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/update-police-station/${id}`); // Navigate to update page with station ID
  };

  return (
    <>
      <TopBar
        rightButton={
          <button
            onClick={() => navigate("/admin/new-police-station")}
            className="bg-primary hover:bg-primary-400 text-white px-3 py-1.5 rounded"
          >
            Add Police Station
          </button>
        }
      />
      <div className="p-5">
        {/* 🔹 Suspense: Show spinner while data is loading */}
        <Suspense fallback={<Spinner />}>
          <Await resolve={policeStationData}>
            {(stations) => (
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-stone-100 text-sm font-normal text-stone-500">
                    <th className="text-start p-1.5 border border-gray-200">ID</th>
                    <th className="text-start p-1.5 border border-gray-200">Station Code</th>
                    <th className="text-start p-1.5 border border-gray-200">Station Name</th>
                    <th className="text-start p-1.5 border border-gray-200">City</th>
                    <th className="text-start p-1.5 border border-gray-200">State</th>
                    <th className="text-start p-1.5 border border-gray-200">Country</th>
                    <th className="text-start p-1.5 border border-gray-200">Pincode</th>
                    <th className="text-start p-1.5 border border-gray-200">Created At</th>
                    <th className="text-start p-1.5 border border-gray-200">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {stations?.length > 0 ? (
                    stations.map((station) => (
                      <TableRow
                        key={station.id}
                        station={station}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center p-2">
                        No police stations available.
                      </td>
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

export default PoliceStation;

// ✅ Table Row Component
const TableRow = ({ station, handleEdit, handleDelete }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-200">{station.id}</td>
      <td className="p-1.5 border border-gray-200">{station.stationCode}</td>
      <td className="p-1.5 border border-gray-200">{station.stationName}</td>
      <td className="p-1.5 border border-gray-200">{station.address?.city || "N/A"}</td>
      <td className="p-1.5 border border-gray-200">{station.address?.state || "N/A"}</td>
      <td className="p-1.5 border border-gray-200">{station.address?.country || "N/A"}</td>
      <td className="p-1.5 border border-gray-200">{station.address?.pinCode || "N/A"}</td>
      <td className="p-1.5 border border-gray-200">
        {station.createdAt ? new Date(station.createdAt).toLocaleString() : "N/A"}
      </td>
      <td className="p-1.5 flex items-center gap-2 border border-gray-200">
        <button className="text-primary-600 hover:underline" onClick={() => alert("working on! Future Scope!")}>
          <FiEdit size={20} />
        </button>
        <button className="text-red-600 hover:underline" onClick={() => alert("working on! Future Scope!")}>
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};
