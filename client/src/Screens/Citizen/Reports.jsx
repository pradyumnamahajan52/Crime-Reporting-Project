import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useActionData, useLoaderData, useSubmit } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { toast } from "react-toastify";


const Report = () => {
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
    tandcisChecked:false
  });

  const { crimeCategories } = useLoaderData();

  const actionData = useActionData();
  const submit = useSubmit();

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

  // useEffect(() => {
  //   setSelectedCategory(crimeCategories.data || []);
  //   // console.log('====================================');
  //   // console.log(crimeCategories.data);
  //   // console.log('====================================');
  // }, [crimeCategories.data]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for file uploads
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("crimeDate", formData.crimeDate);
    formDataToSubmit.append("description", formData.description);
    // formDataToSubmit.append("stationName", formData.stationName);
    formDataToSubmit.append("crimeCategoryId", formData.crimeCategoryId);
    formDataToSubmit.append("addressLine1", formData.address.addressLine1);
    formDataToSubmit.append("addressLine2", formData.address.addressLine2)
    formDataToSubmit.append("city", formData.address.city);
    formDataToSubmit.append("state", formData.address.state);
    formDataToSubmit.append("country", formData.address.country);
    formDataToSubmit.append("pinCode", formData.address.pincode);
    formDataToSubmit.append("latitude", formData.address.latitude);
    formDataToSubmit.append("longitude", formData.address.longitude);
    
    // Object.keys(formData.address).forEach((key) => {
    //   formDataToSubmit.append(`address.${key}`, formData.address[key]);
    // });

    // Append all files
    evidenceFiles.forEach((file, index) => {
      formDataToSubmit.append(`evidence[${index}]`, file);
    });

  console.log("working submission");

    submit(formDataToSubmit, {
      action:"/",
      method: "post", 
      encType: "multipart/form-data",
    });
  };

  // Show success/error messages after submission
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
        <h1 className="text-3xl font-bold text-black mb-4 text-center">
          Register Your Complaint
        </h1>
        <p className="mb-6 text-center text-gray-600">
          To report a crime, please provide the following details:
        </p>

        <form onSubmit={handleSubmit} >
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
              <MenuItems className="absolute w-full z-10 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                {crimeCategories.data?.map((cat, index) => (
                  <MenuItem key={index}>
                    {({ active }) => (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.category + cat.subCategory);
                          setFormData((prev) => ({
                            ...prev,
                            crimeCategoryId: cat.catergoryId,
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
              name ="description"
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
                  src={mapSrc()}
                  title="Map Preview"
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
              <input type="checkbox" className="mr-2 accent-[#17A2B8]"    checked={formData.tandcisChecked }  onChange={(e) => setFormData((prev) => ({ ...prev, tandcisChecked: e.target.checked }))}
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
              Report Now!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
