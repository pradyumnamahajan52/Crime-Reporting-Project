import React, { useEffect, useState } from "react";
import { Form, useActionData, useSubmit } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const NewPoliceStation = () => {
  const [formData, setFormData] = useState({
    crimeDate: "",
    stationName: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      latitude: "",
      longitude: "",
    },
  });

  const actionData = useActionData();
  const submit = useSubmit();

  const generateStationCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit code
    setFormData((prevData) => ({ ...prevData, stationCode: randomCode }));
  };

  const mapSrc = () => {
    const { latitude, longitude } = formData.address;
    if (latitude && longitude) {
        return `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData, { method: "post" });
  };

  useEffect(() => {
    if (actionData?.success) {
      toast.success(actionData.success);
    } else if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Police Station
        </h2>

        <ToastContainer position="top-right" autoClose={2500} theme="colored" />

        <Form method="post" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Station Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Station Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="stationCode"
                  value={formData.stationCode}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
                <button
                  type="button"
                  onClick={generateStationCode}
                  className="ml-2 bg-primary hover:bg-primary-400 hover:text-black text-white px-4 py-2 rounded"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Station Name */}
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
                required
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
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.replace(/([A-Z])/g, " $1").trim()}
                </label>
                <input
                  type="text"
                  name={`address.${field}`}
                  value={formData.address[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  required
                />
              </div>
            ))}

            {/* Latitude & Longitude */}
            {["latitude", "longitude"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  name={`address.${field}`}
                  value={formData.address[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            ))}
          </div>

          {/* Map Preview */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Map Preview
            </label>
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

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-400 hover:text-black text-white px-4 py-2 rounded"
            >
              Save Police Station
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewPoliceStation;
