import React, { useState } from 'react';
import TopBar from '../../Components/Dashboard/Topbar/TopBar';
import profileimg from '../../assets/images/profile.png'
import { Form } from 'react-router-dom';

const UserProfile = () => {
  

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
                <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Full Name" defaultValue="" onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Email" defaultValue="" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Phone Number" defaultValue="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" defaultValue="" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 1</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Address Line 1" defaultValue="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 2</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Address Line 2" defaultValue="" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">City</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="City" defaultValue="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Country</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Country" defaultValue="" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Pin Code</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Pin Code" defaultValue="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Latitude</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Latitude" defaultValue="" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">Longitude</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-200" placeholder="Longitude" defaultValue="" />
            </div>
            <button type="submit" className="mt-6 px-6 py-2 bg-primary hover:bg-primary-400 hover:text-black text-white rounded">Save Changes</button>
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
          <p className="text-sm text-gray-500">Citizen</p>

          <Form method="POST" action="/user/logout">
        <button type="submit"  className="text-md gap-2 bg-primary hover:bg-primary-400 hover:text-black text-white transition-colors  px-3 py-1.5 rounded" >
          Logout
        </button>
        </Form>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
