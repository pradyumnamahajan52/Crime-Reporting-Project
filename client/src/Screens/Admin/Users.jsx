import React from "react";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import { FiEdit, FiTrash } from "react-icons/fi";
import UserForm from "../../Components/Admin/user/UserForm";

import "./UserModal.css";

const Users = () => {
  const [users, setUsers] = React.useState([
    {
      id: 1,
      email: "pradyumna@gmail.com",
      role: "admin",
      phoneNumber: "9876543210",
      createdAt: "2025-01-28T12:43:06.073Z",
    },
    {
      id: 2,
      email: "lalini@gmail.com",
      role: "admin",
      phoneNumber: "9876543211",
      createdAt: "2025-01-29T12:43:06.073Z",
    },
    {
      id: 3,
      email: "jasmine@gmail.com",
      role: "admin",
      phoneNumber: "9876543212",
      createdAt: "2025-01-29T10:43:06.073Z",
    },
    {
      id: 4,
      email: "mitali@gmail.com",
      role: "police",
      phoneNumber: "9876543213",
      createdAt: "2025-02-01T10:43:06.073Z",
    },
    {
      id: 5,
      email: "pawan@gmail.com",
      role: "citizen",
      phoneNumber: "9876543214",
      createdAt: "2025-02-01T10:43:06.073Z",
    },
  ]);
  const [showModal, setShowModal] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);

  // Fetch users from the backend
  // React.useEffect(() => {
  //   fetch("/api/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data))
  //     .catch((err) => console.error(err));
  // }, []);

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
      fetch(`/api/users/${id}`, { method: "DELETE" })
        .then(() => setUsers(users.filter((user) => user.id !== id)))
        .catch((err) => console.error(err));
    }
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
        <table className="w-full table-auto ">
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
                handleCloseModal={handleCloseModal}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg">
            <UserForm
              user={editUser}
              onClose={handleCloseModal}
              onSave={(newUser) => {
                if (editUser) {
                  // Update existing user
                  setUsers((prev) =>
                    prev.map((u) => (u.id === newUser.id ? newUser : u))
                  );
                } else {
                  // Add new user
                  setUsers((prev) => [...prev, newUser]);
                }
                handleCloseModal();
              }}
            />
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
      <td className="p-1.5">
        <a
          href="#"
          className="text-primary-600 underline flex items-center gap-1"
        >
          {user.id}
        </a>
      </td>
      <td className="p-1.5">{user.email}</td>
      <td className="p-1.5">{user.role}</td>
      <td className="p-1.5">{user.phoneNumber}</td>
      <td className="p-1.5">{user.createdAt}</td>
      <td className="w-8 flex flex-row content-center m-2">
        <button
          className="text-primary-600 hover:underline"
          onClick={() => handleOpenModal(user)}
        >
          <FiEdit size={20} />
        </button>
        <button
          className="text-red-600 hover:underline ml-2"
          onClick={() => handleDelete(user.id)}
        >
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};
