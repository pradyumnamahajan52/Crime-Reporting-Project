import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useActionData, useSubmit } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import category from "../../data/crime_category";
import { toast } from "react-toastify";

const Report = () => {
  const [formData, setFormData] = useState({
    crimeDate: new Date().toISOString().slice(0, 10), // Default today's date
    description: "",
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
    crimeCategoryId: null,
  });

  const actionData = useActionData();
  const submit = useSubmit();
  const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const [evidence, setEvidence] = useState([]);

  // 📂 Handle multiple file uploads
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidence((prev) => [...prev, ...files]); // Append new files
  };

  // 📍 Auto-detect user's location
  useEffect(() => {
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
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Location permission denied. Please enable location to autofill.");
          }
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // 🗺️ Generate Map URL
  const mapSrc = () => {
    const { latitude, longitude } = formData.address;
    return latitude && longitude
      ? `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
      : null;
  };

  // 📌 Handle form field changes
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

  // 🚀 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.crimeCategoryId) {
      toast.error("Please select a crime category.");
      return;
    }
    submit(formData, { method: "post" });
  };

  // 🎉 Success/Error messages
  useEffect(() => {
    if (actionData?.success) {
      toast.success(actionData.success);
    } else if (actionData?.error) {
      toast.error(actionData.error);
    }
  }, [actionData]);

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-4 text-center">Register Your Complaint</h1>
        <p className="mb-6 text-center text-gray-600">To report a crime, please provide the following details:</p>

        <form onSubmit={handleSubmit}>
          {/* 📅 Crime Date */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Crime Date:</label>
            <input
              type="date"
              name="crimeDate"
              className="border border-[#17A2B8] p-2 rounded w-full"
              value={formData.crimeDate}
              onChange={handleChange}
            />
          </div>

          {/* 🔽 Crime Category Dropdown */}
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Crime Category:</label>
            <Menu as="div" className="relative inline-block w-full">
              <MenuButton className="w-full flex justify-between items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 hover:bg-gray-50">
                {selectedCategory}
                <HiChevronDown className="size-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                {category.map((cat, index) => (
                  <MenuItem key={index}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setFormData((prev) => ({ ...prev, crimeCategoryId: index + 1 }));
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {cat}
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* 📂 Upload Evidence */}
          <div className="mb-6">
            <label className="block text-lg font-medium mb-2">Upload Evidences (Optional):</label>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="border border-[#17A2B8] p-2 rounded w-full cursor-pointer"
            />

            {/* Preview Uploaded Files */}
            {evidence.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-700 mb-2">Preview:</h3>
                <div className="flex flex-wrap gap-4">
                  {evidence.map((file, index) => (
                    file.type.startsWith("image/") ? (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Uploaded ${index + 1}`}
                        className="w-24 h-24 object-cover rounded border border-[#17A2B8]"
                      />
                    ) : (
                      <p key={index} className="text-sm text-gray-700">{file.name}</p>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 📍 Map Preview */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Map Preview</label>
            <div className="w-full h-80 border rounded-lg overflow-hidden">
              {mapSrc() ? (
                <iframe src={mapSrc()} title="Map Preview" className="w-full h-full" allowFullScreen></iframe>
              ) : (
                <p className="text-center text-gray-500 pt-32">Enable location to preview the map.</p>
              )}
            </div>
          </div>

          {/* 🔘 Submit Button */}
          <div className="text-center mt-6">
            <button type="submit" className="bg-[#17A2B8] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#138496] transition">
              Report Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
