import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useFetcher } from "react-router-dom";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";

const Profile = () => {
  const { userData } = useLoaderData(); // Fetch user data from the loader
  const fetcher = useFetcher(); // Used for form submission

  const [userInfo, setUserInfo] = useState(userData?.data || {});

  useEffect(() => {
    setUserInfo(userData?.data || {});
  }, [userData]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <TopBar />

      <div className="px-4 py-4 grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">My Account</h2>
          
          {/* React Router Form to handle submission */}
          <fetcher.Form method="post" action="/profile">
            <div className="grid mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Full Name"
                value={userInfo.fullName || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Phone Number"
                value={userInfo.phoneNumber || ""}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Email Address"
                value={userInfo.email || ""}
                readOnly
              />
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded"
            >
              Save Changes
            </button>
          </fetcher.Form>
        </div>

        <div className="col-span-4 bg-white shadow rounded-lg p-6 text-center">
          <img
            src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700">{userInfo.fullName || "Guest Admin"}</h3>
          <p className="text-sm text-gray-500">{userInfo.role || "Administrator"}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
