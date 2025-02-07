import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"; // Import for navigation
import { FiEdit, FiTrash } from "react-icons/fi";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";

const PoliceStation = () => {
  const { policeStationData  } = useLoaderData(); // Fetch data from loader
  const [stations, setStations] = useState(policeStationData || []);
    // {
    //   id: 1,
    //   stationCode: "123456",
    //   stationName: "Hinjawadi Police Station",
    //   city: "Pune",
    //   state: "Maharashtra",
    //   country: "India",
    //   pinCode: "411057",
    //   latitude: "18.5973",
    //   longitude: "73.7187",
    //   createdAt: "2025-01-30T12:43:06.073Z",
    // },
    // {
    //   id: 2,
    //   stationCode: "654321",
    //   stationName: "Wakad Police Station",
    //   city: "Pune",
    //   state: "Maharashtra",
    //   country: "India",
    //   pinCode: "411057",
    //   latitude: "18.6025",
    //   longitude: "73.7615",
    //   createdAt: "2025-01-29T12:43:06.073Z",
    // },
  

  const navigate = useNavigate(); // Initialize navigation


  // Sync state when stations changes
    useEffect(() => {
      setStations(policeStationData || []);
      console.log(policeStationData)
    }, [policeStationData]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this police station?")) {
      setStations(stations.filter((station) => station.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/update-police-station/${id}`); // Navigate to update page with station ID
  };

  return (
    <>
      <TopBar
        rightButton=""
      />
      <div className="p-5">
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
            {stations.map((station) => (
              <TableRow
                key={station.id}
                station={station}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PoliceStation;

const TableRow = ({ station, handleEdit, handleDelete }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-200">{station.id}</td>
      <td className="p-1.5 border border-gray-200">{station.stationCode}</td>
      <td className="p-1.5 border border-gray-200">{station.stationName}</td>
      <td className="p-1.5 border border-gray-200">{station.address.city}</td>
      <td className="p-1.5 border border-gray-200">{station.address.state}</td>
      <td className="p-1.5 border border-gray-200">{station.address.country}</td>
      <td className="p-1.5 border border-gray-200">{station.address.pinCode}</td>
      <td className="p-1.5 border border-gray-200">
        {new Date(station.createdAt).toLocaleString()}
      </td>
      <td className="p-1.5 flex items-center gap-2 border border-gray-200">
        <button
          className="text-primary-600 hover:underline"
          onClick={() => handleEdit(station.id)}
        >
          <FiEdit size={20} />
        </button>
        <button
          className="text-red-600 hover:underline"
          onClick={() => handleDelete(station.id)}
        >
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};
