import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState,useEffect } from "react";
import {useActionData,useSubmit} from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import category from "../../data/crime_category";

const Report = () => {
  const [formData, setFormData] = useState({
    crimeDate: new Date().toLocaleDateString(),
    description: "",
    stationName: "",
    address: {
      addressLine2: "",
      addressLine1: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
      latitude:"",
      longitude: "",
    },
    crimeCategoryId:null
  });

  const actionData = useActionData();
  const submit = useSubmit();

  const [selectedCategory, setSelectedCategory] = useState("Select a category");
  const [evidence, setEvidence] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setEvidence(files);
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

  const mapSrc = () => {
    const { latitude, longitude } = formData.address;
    if (latitude && longitude) {
        return `https://maps.google.com/maps?q=${formData.latitude},${formData.longitude}&z=15&output=embed`;
    }
    return null;
  };

  const setLongitudeLatitude = (latitude,longitude) => {

    setFormData((prev) => ({ ...prev, latitude,longitude }));



  }


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


  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLongitudeLatitude(position.coords.latitude, position.coords.longitude);
      });

    } else {


    }

  }, [])
  

  return (
    <div style={{ width: "100vw" }} className="w-full min-h-screen p-6 bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-4 text-center">
          Register Your Complaint
        </h1>
        <p className="mb-6 text-center text-gray-600">
          To report a crime, please provide the following details:
        </p>

        {/* Crime Date */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Crime Date:</label>
          <input type="date" placeholder="MM-DD-YYYY" className="border border-[#17A2B8] p-2 rounded w-full" value={formData.crimeDate} />
        </div>

        {/* Crime Category Dropdown */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Crime Category:</label>
          <Menu as="div" className="relative inline-block w-full">
            <MenuButton className="w-full flex justify-between items-center gap-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 hover:bg-gray-50">
              {selectedCategory}
              <HiChevronDown className="size-5 text-gray-400" />
            </MenuButton>
            <MenuItems
              className="absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5"
            >
              {category.map((cat, index) => (
                <MenuItem key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                    >
                      {cat}
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
          />
          <input
            type="text"
            placeholder="Street Address Line 2"
            className="border border-[#17A2B8] p-2 rounded w-full mb-2"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="City"
              className="border border-[#17A2B8] p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="State/Province"
              className="border border-[#17A2B8] p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Postal/Zip Code"
            className="border border-[#17A2B8] p-2 rounded w-full mt-2"
          />
        </div>

        {/* Police Contact Question */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Do you want the police to contact you?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contact"
                className="mr-2 accent-[#17A2B8]"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contact"
                className="mr-2 accent-[#17A2B8]"
              />
              No
            </label>
          </div>
        </div>

        
            <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Upload Evidences(Optional):
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="border border-[#17A2B8] p-2 rounded w-full cursor-pointer"
          />

          {/* Preview Uploaded Images */}
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
                    <p key={index} className="text-sm text-gray-700">
                      {file.name}
                    </p>
                  )
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Further Comments */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">
            Further Comments:
          </label>
          <textarea
            className="border border-[#17A2B8] p-2 rounded w-full"
            rows="4"
            placeholder="Add any extra details..."
          ></textarea>
        </div>

        {/* Certification Checkbox */}
        <div className="mb-6">
          <label className="flex items-center text-lg">
            <input
              type="checkbox"
              className="mr-2 accent-[#17A2B8]"
            />
            I certify that the above information is true and correct.
          </label>
        </div>

        {/* Crime Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Crime Description:</label>
          <textarea className="border border-[#17A2B8] p-2 rounded w-full" rows="4" placeholder="Describe the crime in detail..."></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-[#17A2B8] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#138496] transition">
            Report Now!
          </button>
        </div>

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
                  Please give permission Latitude and Longitude to preview the location.
                </p>
              )}
            </div>
          </div>
      </div>

    </div>
  );
};

export default Report;   