import React, { Suspense, useState } from "react";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import { FiEdit, FiTrash } from "react-icons/fi";
import UserForm from "../../Components/Admin/user/UserForm";
import { Await, useLoaderData } from "react-router-dom";
import "./UserModal.css";
import Spinner from "../../Components/Spinner";
import { getAuthToken } from "../../action/user/Auth";
import { API } from "../../API";

const Users = () => {
  const { usersData } = useLoaderData(); // Fetch users data using Suspense
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [users, setUsers] = useState(usersData?.data || []); // Track users list

  // Open modal for editing or adding a user
  const handleOpenModal = (user = null) => {
    setEditUser(user);
    setShowModal(true);
  };

  // Close modal when clicking outside or pressing cancel
  const handleCloseModal = () => {
    setEditUser(null);
    setShowModal(false);
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await fetch(`${API}/admin/users?id=${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAuthToken()}`,
          },
        });

        // Remove user from state after successful deletion
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // Handle save (add or update user)
  const handleSaveUser = (newUser) => {
    if (editUser) {
      // Update existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === newUser.id ? newUser : user))
      );
    } else {
      // Add new user
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }
    handleCloseModal();
  };

  return (
    <>
      <TopBar
        rightButton={
          <button
            onClick={() => handleOpenModal()}
            className="flex text-sm items-center gap-2 bg-primary transition-colors hover:bg-primary-400 text-white px-3 py-1.5 rounded"
          >
            <span>Add new User</span>
          </button>
        }
      />
      <div className="p-5">
        <Suspense fallback={<Spinner />}>
          <Await resolve={usersData}>
            {(users) => (
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-stone-100 text-sm font-normal text-stone-500">
                    <th className="text-start p-1.5 border border-gray-300">ID</th>
                    <th className="text-start p-1.5 border border-gray-300">Full Name</th>
                    <th className="text-start p-1.5 border border-gray-300">Email</th>
                    <th className="text-start p-1.5 border border-gray-300">Role</th>
                    <th className="text-start p-1.5 border border-gray-300">Phone Number</th>
                    <th className="text-start p-1.5 border border-gray-300">Created At</th>
                    <th className="p-2 border border-gray-300"></th>
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
            )}
          </Await>
        </Suspense>
      </div>

      {/* 🔹 MODAL: Add/Edit User */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <UserForm user={editUser} onClose={handleCloseModal} onSave={handleSaveUser} />
          </div>
        </div>
      )}
    </>
  );
};

export default Users;


const TableRow = ({ user, handleOpenModal, handleDelete }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-300">{user.id}</td>
      <td className="p-1.5 border border-gray-300">{user.fullName}</td>
      <td className="p-1.5 border border-gray-300">{user.email}</td>
      <td className="p-1.5 border border-gray-300">{user.role}</td>
      <td className="p-1.5 border border-gray-300">{user.phoneNumber}</td>
      <td className="p-1.5 border border-gray-300">
        {user.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A"}
      </td>
      <td className="w-8 flex flex-row content-center m-2 gap-2">
        <button
          className="text-primary-600 hover:underline"
          onClick={() => handleOpenModal(user)}
        >
          <FiEdit size={20} />
        </button>
        <button
          className="text-red-600 hover:underline"
          onClick={() => handleDelete(user.id)}
        >
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};
