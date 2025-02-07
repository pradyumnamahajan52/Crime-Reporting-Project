import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";

const UpdatePoliceStation = () => {
  const { policeStationData } = useLoaderData();
  const { id } = useParams(); // Get the station ID from the URL
  const navigate = useNavigate(); // Navigation instance

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

  const [errors, setErrors] = useState({});

  useEffect(() => {

    let requiredPoliceStationData;
      policeStationData.forEach((policeStation, index) => {
        if(policeStation.id == id){
          requiredPoliceStationData = policeStation
        }
      })

      setFormData(requiredPoliceStationData || []);
  }, [id]);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (name === "stationCode" && !value) {
      newErrors.stationCode = "Station Code is required.";
    } else if (name === "stationName" && !value) {
      newErrors.stationName = "Station Name is required.";
    }

    if (name.startsWith("address.")) {
      const fieldName = name.split(".")[1];
      if (fieldName === "addressLine1" && !value) {
        newErrors.addressLine1 = "Address Line 1 is required.";
      }
      if (fieldName === "city" && !value) {
        newErrors.city = "City is required.";
      }
      if (fieldName === "state" && !value) {
        newErrors.state = "State is required.";
      }
      if (fieldName === "country" && !value) {
        newErrors.country = "Country is required.";
      }
      if (fieldName === "pinCode" && !value) {
        newErrors.pinCode = "Pin Code is required.";
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (typeof formData[key] === "object") {
        Object.keys(formData[key]).forEach((subKey) => {
          validateField(`address.${subKey}`, formData.address[subKey]);
        });
      } else {
        validateField(key, formData[key]);
      }
    });

    if (Object.keys(errors).length === 0) {
      console.log("Updated Station Data:", formData);
      // Perform API call to save the updated data
      navigate("/police-stations"); // Navigate back to the police stations list
    }
  };

  const mapSrc = () => {
    const { latitude, longitude } = formData.address;
    if (latitude && longitude) {
      return `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    }
    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Update Police Station
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Station Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Station Code
              </label>
              <input
                type="text"
                name="stationCode"
                value={formData.stationCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                readOnly
              />
              {errors.stationCode && (
                <p className="text-red-500 text-sm">{errors.stationCode}</p>
              )}
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
              />
              {errors.stationName && (
                <p className="text-red-500 text-sm">{errors.stationName}</p>
              )}
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
            Address
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                name="address.addressLine1"
                value={formData.address.addressLine1}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.addressLine1 && (
                <p className="text-red-500 text-sm">{errors.addressLine1}</p>
              )}
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                name="address.addressLine2"
                value={formData.address.addressLine2}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="address.country"
                value={formData.address.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>

            {/* Pin Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pin Code
              </label>
              <input
                type="text"
                name="address.pinCode"
                value={formData.address.pinCode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm">{errors.pinCode}</p>
              )}
            </div>

            {/* Latitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Latitude
              </label>
              <input
                type="text"
                name="address.latitude"
                value={formData.address.latitude}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            {/* Longitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Longitude
              </label>
              <input
                type="text"
                name="address.longitude"
                value={formData.address.longitude}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Map */}
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

          <div className="flex justify-end mt-6">
            <button
              type="button"
              onClick={() => navigate("/police-stations")}
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
      </div>
    </div>
  );
};

export default UpdatePoliceStation;
