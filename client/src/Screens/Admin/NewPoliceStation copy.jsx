import React, { useState, useEffect } from "react";
import { Form, useActionData, useSubmit } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPoliceStation = () => {
  const [formData, setFormData] = useState({
    stationCode: "",
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

  useEffect(() => {
    if (actionData?.success) {
      toast.success(actionData.success);
    } else if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  const generateStationCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setFormData((prevData) => ({ ...prevData, stationCode: randomCode }));
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Police Station</h2>

        <ToastContainer position="top-right" autoClose={2500} theme="colored" />

        <Form method="post" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Station Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Station Code</label>
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
                  className="ml-2 bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Station Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Station Name</label>
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

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button type="submit" className="bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded">
              Save Police Station
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewPoliceStation;
