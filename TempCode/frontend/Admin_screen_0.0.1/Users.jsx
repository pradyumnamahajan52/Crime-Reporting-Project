import React from "react";
import TopBar from "../../Components/Admin/Dashboard/TopBar";
import { FiEdit, FiTrash } from "react-icons/fi";
import UserForm from "../../Components/Admin/user/UserForm";
import "./UserModal.css";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [editUser, setEditUser] = React.useState(null);

  // Fetch users from the backend
  React.useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

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
            className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded"
          >
            <span>Add new User</span>
          </button>
        }
      />
      <div className="p-5">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Phone Number</th>
              <th className="p-2 border">Created At</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="p-2 text-center">{user.id}</td>
                <td className="p-2 text-center">{user.email}</td>
                <td className="p-2 text-center">{user.role}</td>
                <td className="p-2 text-center">{user.phoneNumber}</td>
                <td className="p-2 text-center">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2 text-center">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleOpenModal(user)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="text-red-600 hover:underline ml-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
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
