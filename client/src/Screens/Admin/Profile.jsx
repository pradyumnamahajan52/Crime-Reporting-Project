import React from 'react'
import TopBar from '../../Components/Dashboard/Topbar/TopBar'

const Profile = () => {
  return (
    <>
  {/* TopBar */}
  <TopBar rightButton="" />

{/* Profile Page Content */}
<div className="px-4 py-4 grid grid-cols-12 gap-6">
  {/* User Information Form */}
  <div className="col-span-8 bg-white shadow rounded-lg p-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-4">My Account</h2>
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
            placeholder="First Name"
            defaultValue=""
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
            placeholder="Last Name"
            defaultValue=""
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Email Address
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
          placeholder="Email Address"
          defaultValue=""
        />
      </div>
      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded"
      >
        Save Changes
      </button>
    </form>
  </div>

  {/* Profile Details Card */}
  <div className="col-span-4 bg-white shadow rounded-lg p-6 text-center">
    <img
      src="https://api.dicebear.com/9.x/avataaars-neutral/svg?backgroundColor=b6e3f4,c0aede,d1d4f9"
      alt="Profile"
      className="w-24 h-24 mx-auto rounded-full mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-700">Guest Admin</h3>
    <p className="text-sm text-gray-500">Administrator</p>
    {/* <div className="mt-4 grid grid-cols-3 gap-2 text-center">
      <div>
        <p className="text-lg font-semibold text-gray-700">22</p>
        <p className="text-sm text-gray-500">Friends</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-700">10</p>
        <p className="text-sm text-gray-500">Photos</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-700">89</p>
        <p className="text-sm text-gray-500">Comments</p>
      </div>
    </div> */}
  </div>

  {/* Password Change Section */}
  <div className="col-span-8 bg-white shadow rounded-lg p-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-4">Change Password</h2>
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Current Password
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
          placeholder="Enter current password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          New Password
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
          placeholder="Enter new password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
          placeholder="Confirm new password"
        />
      </div>
      <button
        type="submit"
        className="mt-6 px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded"
      >
        Update Password
      </button>
    </form>
  </div>
</div>
  </>
  )
}

export default Profile