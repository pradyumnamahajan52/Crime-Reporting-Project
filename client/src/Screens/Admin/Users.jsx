import React, { useState, useEffect } from "react";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import { FiEdit, FiTrash } from "react-icons/fi";
import UserForm from "../../Components/Admin/user/UserForm";
import { useLoaderData } from "react-router-dom";

import "./UserModal.css";

const Users = () => {
  const { usersData } = useLoaderData(); // Fetch data from loader
  const [users, setUsers] = useState(usersData || []); // Initialize state with fetched users
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Sync state when usersData changes
  useEffect(() => {
    setUsers(usersData || []);
  }, [usersData]);



  // Open modal for editing or adding a user
  const handleOpenModal = (user = null) => {
    setEditUser(user);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setEditUser(null);
    setShowModal(false);
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      // fetch(`/api/users/${id}`, { method: "DELETE" })
      //   .then(() => setUsers((prev) => prev.filter((user) => user.id !== id)))
      //   .catch((err) => console.error("Error deleting user:", err));
    }
  };

  // Handle user save (add or edit)
  const handleSaveUser = (newUser) => {
    if (editUser) {
      // Update existing user
      setUsers((prev) => prev.map((u) => (u.id === newUser.id ? newUser : u)));
    } else {
      // Add new user
      setUsers((prev) => [...prev, newUser]);
    }
    handleCloseModal();
  };

  return (
    <>
      <TopBar
        rightButton={
          <button
            onClick={() => handleOpenModal()}
            className="flex text-sm items-center gap-2 bg-primary transition-colors hover:bg-primary-400 text-stone-50 hover:text-black px-3 py-1.5 rounded"
          >
            <span>Add new User</span>
          </button>
        }
      />
      <div className="p-5">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-1.5">ID</th>
              <th className="text-start p-1.5">Email</th>
              <th className="text-start p-1.5">Role</th>
              <th className="text-start p-1.5">Phone Number</th>
              <th className="text-start p-1.5">Created At</th>
              <th className="p-2 "></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                user={user}
                handleOpenModal={handleOpenModal}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg">
            <UserForm user={editUser} onClose={handleCloseModal} onSave={handleSaveUser} />
          </div>
        </div>
      )}
    </>
  );
};

export default Users;

// Table Row Component
const TableRow = ({ user, handleOpenModal, handleDelete }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5">
        <a href="#" className="text-primary-600 underline flex items-center gap-1">
          {user.id}
        </a>
      </td>
      <td className="p-1.5">{user.email}</td>
      <td className="p-1.5">{user.role}</td>
      <td className="p-1.5">{user.phoneNumber}</td>
      <td className="p-1.5">{user.createdAt}</td>
      <td className="w-8 flex flex-row content-center m-2">
        <button className="text-primary-600 hover:underline" onClick={() => handleOpenModal(user)}>
          <FiEdit size={20} />
        </button>
        <button className="text-red-600 hover:underline ml-2" onClick={() => handleDelete(user.id)}>
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};
