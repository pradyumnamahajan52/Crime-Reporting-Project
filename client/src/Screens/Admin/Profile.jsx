import React, { useState, Suspense } from "react";
import { useLoaderData, useNavigate, useLocation, Await } from "react-router-dom";
import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import Spinner from "../../Components/Spinner";

const Profile = () => {
  const { userData } = useLoaderData(); // Fetch user data using Suspense
  const navigate = useNavigate(); // ✅ Use navigate for redirection
  const location = useLocation(); // ✅ Get current URL (for reading success message)
  const [isSaving, setIsSaving] = useState(false);

  // ✅ Read success message from URL
  const successMessage = new URLSearchParams(location.search).get("success");

  // ✅ Handle form submission (Save user profile)
  const handleSubmit = async (e, userInfo) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const token = getAuthToken();
      const response = await fetch(`${API}/admin/user/details`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullName: userInfo.fullName,
          phoneNumber: userInfo.phoneNumber,
          role: userInfo.role,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile.");
      }

      // ✅ Redirect to Profile Page with Success Message
      navigate("/admin/profile?success=Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <TopBar />

      <div className="px-4 py-4 grid grid-cols-12 gap-6">
        <div className="col-span-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">My Account</h2>

          {/* ✅ Show Success Message if available */}
          {successMessage && (
            <div className="mb-4 text-green-600 font-semibold">{successMessage}</div>
          )}

          {/* ✅ Suspense + Await for handling loader data */}
          <Suspense fallback={<Spinner />}>
            <Await resolve={userData}>
              {(data) => <ProfileForm userData={data.data} handleSubmit={handleSubmit} isSaving={isSaving} />}
            </Await>
          </Suspense>
        </div>

        <div className="col-span-4 bg-white shadow rounded-lg p-6 text-center">
          <Suspense fallback={<Spinner />}>
            <Await resolve={userData}>
              {(data) => (
                <ProfileSidebar fullName={data.data.fullName} role={data.data.role} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Profile;

// ✅ Profile Form Component
const ProfileForm = ({ userData, handleSubmit, isSaving }) => {
  const [userInfo, setUserInfo] = useState(userData || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, userInfo)}>
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
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

// ✅ Profile Sidebar Component
const ProfileSidebar = ({ fullName, role }) => (
  <>
    <img
      src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
      alt="Profile"
      className="w-24 h-24 mx-auto rounded-full mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-700">{fullName || "Guest Admin"}</h3>
    <p className="text-sm text-gray-500">{role || "Administrator"}</p>
  </>
);
