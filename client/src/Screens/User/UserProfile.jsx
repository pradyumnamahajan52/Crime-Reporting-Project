import React, { useEffect, useState } from "react";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import profileimg from "../../assets/images/profile.png";
import { Form } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../Services/profile";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const UserProfile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    aadhaarCardNumber: "",
    dateOfBirth: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
    profileImage: "",
    longitude: "",
    latitude: "",
    country: "",
  });

  const fetchUserDetails = async () => {
    try {
      const res = await getUserDetails();
      if (res.status === 200) {
        const { data } = res.data; // API response contains `data` inside `response.data`
        const { user, aadhaarCard, address } = data;

        setProfileData({
          fullName: user.fullName || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          dateOfBirth: data.dateOfBirth || "",
          aadhaarCardNumber: aadhaarCard.cardNumber || "",
          addressLine1: address.addressLine1 || "",
          addressLine2: address.addressLine2 || "",
          city: address.city || "",
          state: address.state || "",
          pinCode: address.pinCode || "",
          latitude: address.latitude || "",
          longitude: address.longitude || "",
          country: address.country || "",
          role:user.role || ""
        });
      }
    } catch (error) {
      return error;
    }
  };

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      setisLoading(true);
      const res = await updateUserDetails(profileData);
      if (res.status === 200) {
        toast.success("User details updates successfully");
        fetchUserDetails()
      }
      else{
        toast.error("Failed to update user details");
      }
      console.log(res);
    } catch (error) {
      return error;
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
      {/* TopBar */}
      <TopBar rightButton="" />

      {/* Profile Page Content */}
      <div className="px-4 py-4 grid grid-cols-12 gap-6">
        {/* User Information Form */}
        <div className="col-span-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            My Account
          </h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileData.fullName}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Full Name"

                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Email"
                  readOnly
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={profileData.phoneNumber}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Phone Number"
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={profileData.dateOfBirth}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      dateOfBirth: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Address Line 1
                </label>
                <input
                  type="text"
                  value={profileData.addressLine1}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Address Line 1"
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      addressLine1: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Address Line 2
                </label>
                <input
                  type="text"
                  value={profileData.addressLine2}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Address Line 2"
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      addressLine2: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={profileData.city}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="City"
                  onChange={(e) =>
                    setProfileData({ ...profileData, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={profileData.country}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Country"
                  onChange={(e) =>
                    setProfileData({ ...profileData, country: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Pin Code
                </label>
                <input
                  type="text"
                  value={profileData.pinCode}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Pin Code"
                  onChange={(e) =>
                    setProfileData({ ...profileData, pinCode: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Latitude
                </label>
                <input
                  type="text"
                  value={profileData.latitude}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                  placeholder="Latitude"
                  onChange={(e) =>
                    setProfileData({ ...profileData, latitude: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Longitude
              </label>
              <input
                type="text"
                value={profileData.longitude}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Longitude"
                onChange={(e) =>
                  setProfileData({ ...profileData, longitude: e.target.value })
                }
              />
            </div>
            <button
              onClick={handleSaveChanges}
              className="mt-6 px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>

        {/* Profile Details Card */}
        <div className="col-span-4 bg-white shadow rounded-lg p-6 text-center">
          <img
            src={profileimg}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700"></h3>
          <p className="text-sm text-gray-500">{profileData.role}</p>

          <Form method="POST" action="/user/logout">
            <button
              type="submit"
              className="text-md gap-2 bg-primary hover:bg-primary-400 hover:text-black text-white transition-colors  px-3 py-1.5 rounded"
            >
              Logout
            </button>
          </Form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       
      />
    </>
  );
};

export default UserProfile;
