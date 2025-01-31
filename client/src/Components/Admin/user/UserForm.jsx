import React, { useState } from "react";

const UserForm = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState(
        user || {
          email: "",
          role: "",
          phoneNumber: "",
        }
      );
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const method = user ? "PUT" : "POST";
        const endpoint = user ? `/api/users/${user.id}` : "/api/users";
    
        fetch(endpoint, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => onSave(data))
          .catch((err) => console.error(err));
      };

      
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-bold mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
    <div>
      <label className="block text-sm font-bold mb-2">Role:</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Role</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
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
      <button type="submit" className="bg-primary hover:bg-primary-400 hover:text-black text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  </form>
  )
}

export default UserForm