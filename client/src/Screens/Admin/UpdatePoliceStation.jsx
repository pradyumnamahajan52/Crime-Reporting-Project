import React, { useState, useEffect, Suspense } from "react";
import { useParams, useNavigate, useLoaderData, Await, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner";

const UpdatePoliceStation = () => {
  const { policeStationData } = useLoaderData(); //  Fetch data using Suspense
  const { id } = useParams(); //  Get station ID from URL
  const navigate = useNavigate();
  const submit = useSubmit();
  
  const [formData, setFormData] = useState({
    stationCode: "",
    stationName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    latitude: "",
    longitude: "",
  });

  // ✅ Update formData when policeStationData is resolved
  // useEffect(() => {
  //   if (policeStationData) {
  //     policeStationData.then((data) => {
  //       setFormData({
  //         stationCode: data.stationCode || "",
  //         stationName: data.stationName || "",
  //         addressLine1: data.address?.addressLine1 || "",
  //         addressLine2: data.address?.addressLine2 || "",
  //         city: data.address?.city || "",
  //         state: data.address?.state || "",
  //         country: data.address?.country || "",
  //         pinCode: data.address?.pinCode || "",
  //         latitude: data.address?.latitude || "",
  //         longitude: data.address?.longitude || "",
  //       });
  //     });
  //   }
  // }, [policeStationData]);

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData, { method: "PUT" });
    toast.success("Police Station Updated Successfully!");
    setTimeout(() => navigate("/admin/police-station"), 2000);
  };

  // ✅ Google Maps Preview URL
  const mapSrc = () => {
    const { latitude, longitude } = formData;
    return latitude && longitude ? `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed` : null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Update Police Station</h2>

        {/* ✅ Use Suspense and Await to fetch data */}
        <Suspense fallback={<Spinner />}>
          <Await resolve={policeStationData}>
            {(data) => (
              <form onSubmit={handleSubmit} method="PUT">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Station Code
                    </label>
                    <input
                      type="text"
                      name="stationCode"
                      value={formData.stationCode}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Station Name
                    </label>
                    <input
                      type="text"
                      name="stationName"
                      value={formData.stationName}
                      onChange={(e) => setFormData({ ...formData, stationName: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                  </div>
                </div>

                {/* Address Fields */}
                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["addressLine1", "addressLine2", "city", "state", "country", "pinCode", "latitude", "longitude"].map(
                    (field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type="text"
                          name={field}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>
                    )
                  )}
                </div>

                {/* Map Preview */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Map Preview</label>
                  <div className="w-full h-80 border rounded-lg overflow-hidden">
                    {mapSrc() ? (
                      <iframe
                        src={mapSrc()}
                        title="Map Preview"
                        className="w-full h-full"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p className="text-center text-gray-500 pt-32">
                        Enter Latitude and Longitude to preview the location.
                      </p>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => navigate("/admin/police-station")}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Update Police Station
                  </button>
                </div>
              </form>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default UpdatePoliceStation;
