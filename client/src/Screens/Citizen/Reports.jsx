import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";
import SelectPoliceStationReport from "../../Components/Report/SelectPoliceStationReport";
import { motion } from "framer-motion";

const Report = () => {
  const [showPoliceStationModal, setShowPoliceStationModal] = useState(false);
  const [selectedPoliceStation, setSelectedPoliceStation] = useState(null);
  const [nearByPoliceStations, setNearByPoliceStations] = useState([]);

  const [formData, setFormData] = useState({
    crimeDate: new Date().toISOString().split("T")[0], // Set default to today's date
    description: "",
    // stationName: "",
    address: {
      addressLine2: "",
      addressLine1: "",
      city: "",
      state: "",
      country: "India",
      pinCode: "",
      latitude: null,
      longitude: null,
    },
    crimeLocation: "yes", // Default selected option
    crimeCategoryId: null,
    evidence: [],
    tandcisChecked: false,
  });

  const { crimeCategories } = useLoaderData();

  const actionData = useActionData();
  const submit = useSubmit();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";

  const [selectedCategory, setSelectedCategory] = useState();
  const [evidenceFiles, setEvidenceFiles] = useState([]);

  // Handle File Upload
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidenceFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Remove a file from preview
  const handleRemoveFile = (index) => {
    setEvidenceFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      console.log(name, value);
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Get Google Map Source
  const mapSrc = () => {
    const { latitude, longitude } = formData.address;
    if (latitude && longitude) {
      return `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
    }
    return null;
  };

  // Set User's Latitude & Longitude Automatically
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          }));
        },
        () => {
          alert("Location permission denied. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Auto-fetch location on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for file uploads
    let formDataToSubmit = new FormData();
    formDataToSubmit.append("crimeDate", formData.crimeDate);
    formDataToSubmit.append("description", formData.description);
    // formDataToSubmit.append("stationName", formData.stationName);
    formDataToSubmit.append("crimeCategoryId", formData.crimeCategoryId);
    formDataToSubmit.append("addressLine1", formData.address.addressLine1);
    formDataToSubmit.append("addressLine2", formData.address.addressLine2);
    formDataToSubmit.append("city", formData.address.city);
    formDataToSubmit.append("state", formData.address.state);
    formDataToSubmit.append("country", formData.address.country);
    formDataToSubmit.append("pinCode", formData.address.pinCode);
    formDataToSubmit.append("latitude", formData.address.latitude);
    formDataToSubmit.append("longitude", formData.address.longitude);

    // Append all files
    evidenceFiles.forEach((file, index) => {
      formDataToSubmit.append(`evidences[${index}]`, file);
    });

    submit(formDataToSubmit, {
      method: "post",
      encType: "multipart/form-data",
      action: "/citizen/reports?step=report",
    });
  };

  // Show success/error messages after submission
  useEffect(() => {
    if (actionData?.success) {
      console.log(actionData);

      toast.success(actionData.success);
      if (actionData.reportSubmitted && !actionData.policeAssigned) {
        setNearByPoliceStations(actionData.data.nearByPoliceStationList);
        setShowPoliceStationModal(true);
      }
      if (actionData.reportSubmitted && actionData.policeAssigned) {
        // navigate("/citizen/crimestatus");
        redirect("/citizen/crimestatus");
      }
    } else if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  // Handle police station selection
  const handleSelectPoliceStation = (station) => {
    setSelectedPoliceStation(station);
    setFormData((prev) => ({
      ...prev,
      policeStationId: station.policeStationId,
    }));
    setShowPoliceStationModal(false);

    // Resubmit the form with the selected police station
    let formDataToSubmit = new FormData();
    formDataToSubmit.append("crimeReportId", actionData.data.crimeReportId);
    formDataToSubmit.append("policeStationId", station.policeStationId);

    submit(formDataToSubmit, {
      method: "post",
      encType: "multipart/form-data",
      action: "/citizen/reports?step=select-police-station",
    });
  };

  return (
    <motion.div
      className="w-full min-h-screen p-6 bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-4 text-center">
          Register Your Complaint
        </h1>
        <p className="mb-6 text-center text-gray-600">
          To report a crime, please provide the following details:
        </p>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Crime Date */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Crime Date:
            </label>
            <input
              type="date"
              name="crimeDate"
              className="border border-[#17A2B8] p-2 rounded w-full"
              value={formData.crimeDate}
              onChange={handleChange}
            />
          </div>

          {/* Crime Category Dropdown */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Crime Category:
            </label>
            <Menu as="div" className="relative inline-block w-full">
              <MenuButton className="w-full flex justify-between items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 hover:bg-gray-50">
                {selectedCategory}
                <HiChevronDown className="size-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 max-h-60 overflow-y-auto">
                {crimeCategories.data?.map((cat, index) => (
                  <MenuItem key={index}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => {
                          console.log(cat.categoryId);
                          setSelectedCategory(cat.category + cat.subCategory);
                          setFormData((prev) => ({
                            ...prev,
                            crimeCategoryId: cat.categoryId,
                          }));
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {cat.category} {cat.subCategory}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* Address Section */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Address:</label>
            <input
              type="text"
              placeholder="Street Address"
              className="border border-[#17A2B8] p-2 rounded w-full mb-2"
              name="address.addressLine1"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Street Address Line 2"
              className="border border-[#17A2B8] p-2 rounded w-full mb-2"
              name="address.addressLine2"
              onChange={handleChange}
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="City"
                className="border border-[#17A2B8] p-2 rounded w-full"
                name="address.city"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="State/Province"
                className="border border-[#17A2B8] p-2 rounded w-full"
                name="address.state"
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Postal/Zip Code"
                className="border border-[#17A2B8] p-2 rounded w-full"
                name="address.pinCode"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Country"
                className="border border-[#17A2B8] p-2 rounded w-full"
                value={formData.address.country}
                readOnly
              />
            </div>
          </div>

          {/* Crime Location Question */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Is the crime location the same as your present location?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="crimeLocation"
                  value="yes"
                  className="mr-2 accent-[#17A2B8]"
                  checked={formData.crimeLocation === "yes"} // Default selected
                  readOnly
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="crimeLocation"
                  value="no"
                  className="mr-2 accent-[#17A2B8]"
                  checked={formData.crimeLocation === "no"}
                  readOnly
                />
                No
              </label>
            </div>
          </div>

          {/* Crime Description */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Crime Description:
            </label>
            <textarea
              className="border border-[#17A2B8] p-2 rounded w-full"
              rows="4"
              placeholder="Describe the crime in detail..."
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>

          {/* Further Comments */}
          {/* <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Further Comments:
          </label>
          <textarea
            className="border border-[#17A2B8] p-2 rounded w-full"
            rows="4"
            placeholder="Add any extra details..."
          ></textarea>
        </div> */}

          {/* Upload Evidence */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">
              Upload Evidence (Optional):
            </label>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="border border-[#17A2B8] p-2 rounded w-full cursor-pointer"
            />

            {/* Preview Uploaded Files */}
            {evidenceFiles.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Preview:</h3>
                <div className="flex flex-wrap gap-4">
                  {evidenceFiles.map((file, index) => (
                    <div key={index} className="relative">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Uploaded ${index + 1}`}
                          className="w-24 h-24 object-cover rounded border border-[#17A2B8]"
                        />
                      ) : (
                        <p className="text-sm text-gray-700">{file.name}</p>
                      )}
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Map Preview
            </label>
            <div className="w-full h-80 border rounded-lg overflow-hidden">
              {mapSrc() ? (
                <iframe
                  title="Map Preview"
                  src={mapSrc()}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-center text-gray-500 pt-32">
                  Please give permission Latitude and Longitude to preview the
                  location.
                </p>
              )}
            </div>
          </div>

          {/* Certification Checkbox */}
          <div className="mb-6">
            <label className="flex items-center text-lg">
              <input
                type="checkbox"
                className="mr-2 accent-[#17A2B8]"
                checked={formData.tandcisChecked}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tandcisChecked: e.target.checked,
                  }))
                }
              />
              I certify that the above information is true and correct.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#17A2B8] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#138496] transition"
              disabled={!formData.tandcisChecked}
            >
              {isSubmitting ? "Please Wait" : "Report Now!"}
            </button>
          </div>
        </form>
      </div>
      {/* Police Station Selection Modal */}
      {showPoliceStationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Select Police Station</h2>
            <ul className="mb-4 ">
              {nearByPoliceStations?.map((station) => (
                <li key={station.policeStationId} className="mb-2">
                  <button
                    onClick={() => handleSelectPoliceStation(station)}
                    className="w-full text-left p-2 border rounded hover:bg-gray-100"
                  >
                    {station.station_name} - {station.policeStationCity}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowPoliceStationModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Report;
