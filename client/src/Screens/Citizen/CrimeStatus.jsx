import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CrimeStatus = () => {
  const [crimes, setCrimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");
    console.log(token); 
    // Fetch data from API using axios with token for authentication
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/crimereport/reportstatus", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token-based authentication
          },
          withCredentials: true, // If sessions/cookies are used
        });
        console.log(response.data);
        setCrimes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once when component mounts

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Crime Reports</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Crime ID</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {crimes.map(crime => (
              <tr key={crime.crimeId} className="hover:bg-gray-100">
                <td className="border p-2">{crime.crimeId}</td>
                <td className="border p-2">{crime.crimeCategory}</td>
                <td className="border p-2">{crime.crimeDate}</td>
                <td className="border p-2">{crime.crimeStatus}</td>
                <td className="border p-2">{crime.crimeDescription}</td>
                <td className="border p-2">
                  <button 
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                    onClick={() => navigate(`/crime-details/${crime.crimeId}`)}
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrimeStatus;
