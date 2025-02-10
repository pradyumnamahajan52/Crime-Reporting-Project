import React, { useState } from "react";
import { getAuthToken } from "../../../action/user/Auth"; // Import function to get JWT token
import { API } from "../../../API";

const UserForm = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    user || {
      fullName: "",
      email: "",
      role: "",
      phoneNumber: "",
    }
  );

  const isUpdate = !!user; // Check if it's an update operation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getAuthToken(); // Get JWT token

    // Determine the API endpoint and method
    const endpoint = isUpdate ? `${API}/admin/users` : `${API}/admin/users`; 
    const method = isUpdate ? "PUT" : "POST";

    try {
      // console.log('====================================');
      // console.log(formData);
      // console.log('====================================');
      const response = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: isUpdate ? `Bearer ${token}` : `Bearer ${token}`, // Token required for both actions
        },
        body: JSON.stringify(formData),
        });
      console.log('====================================');
      console.log(response);
      console.log('====================================');

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to save user.");
      }

      const savedUser = await response.json();
      onSave(savedUser); // Pass updated or new user data to parent component
      onClose(); // Close modal after saving
    } catch (error) {
      console.error("Error saving user:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold mb-2">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          disabled={isUpdate} // Disable email editing if updating user
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Role</option>
          <option value="ADMIN">ADMIN</option>
          <option value="CITIZEN">CITIZEN</option>
          <option value="POLICE">POLICE</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-400 text-white px-4 py-2 rounded"
        >
          {isUpdate ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
