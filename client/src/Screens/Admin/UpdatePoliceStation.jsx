import React, { useState, Suspense } from "react";
import {
  useParams,
  useNavigate,
  useLoaderData,
  Await,
  useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spinner";

const UpdatePoliceStation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const submit = useSubmit();
  const { policeStationData } = useLoaderData(); // This is already resolved inside <Await>

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

  const generateStationCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setFormData((prevData) => ({ ...prevData, stationCode: randomCode }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));

    submit(form, { method: "POST" });
    toast.success("Police Station Updated Successfully!");
    setTimeout(() => navigate("/admin/police-station"), 2000);
  };

  const mapSrc =
    formData.latitude && formData.longitude
      ? `https://maps.google.com/maps?q=${formData.latitude},${formData.longitude}&z=15&output=embed`
      : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Update Police Station
        </h2>

        <Suspense fallback={<Spinner />}>
          <Await resolve={policeStationData}>
            {(data) => {
              // Set formData once when data loads
              if (!formData.stationCode && data?.data) {
                console.log("====================================");
                console.log(data.data);
                console.log("====================================");

                setFormData({
                  stationCode: data.data.stationCode || "",
                  stationName: data.data.stationName || "",
                  addressLine1: data.data.address.addressLine1 || "",
                  addressLine2: data.data.address.addressLine2 || "",
                  city: data.data.address.city || "",
                  state: data.data.address.state || "",
                  country: data.data.address.country || "",
                  pinCode: data.data.address.pinCode || "",
                  latitude: data.data.address.latitude || "",
                  longitude: data.data.address.longitude || "",
                });
              }

              return (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Station Code
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          name="stationCode"
                          value={formData.stationCode}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={generateStationCode}
                          className="ml-2 bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded"
                        >
                          Generate
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Station Name
                      </label>
                      <input
                        type="text"
                        name="stationName"
                        value={formData.stationName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
                    Address
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "addressLine1",
                      "addressLine2",
                      "city",
                      "state",
                      "country",
                      "pinCode",
                      "latitude",
                      "longitude",
                    ].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type="text"
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                      </div>
                    ))}
                  </div>

                  {mapSrc ? (
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Map Preview
                      </label>
                      <div className="w-full h-80 border rounded-lg overflow-hidden">
                        <iframe
                          src={mapSrc}
                          title="Map Preview"
                          className="w-full h-full"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 pt-32">
                      Enter Latitude and Longitude to preview the location.
                    </p>
                  )}

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
              );
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default UpdatePoliceStation;
