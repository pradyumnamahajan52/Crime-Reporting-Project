import React from "react";
import { useState } from "react";

const Report = () => {

    const [evidence, setEvidence] = useState([]);
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setEvidence(files);
      };
    
  return (
    <div style={{width:"100vw"}} className="w-full min-h-screen p-6 bg-gray-100">
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
          <input
            type="text"
            placeholder="MM-DD-YYYY"
            className="border border-[#17A2B8] p-2 rounded w-full"
          />
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
          ></textarea>
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
            Upload Adhhar Image:
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

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-[#17A2B8] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#138496] transition">
            Report Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
