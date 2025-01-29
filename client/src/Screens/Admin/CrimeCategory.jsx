import React, { useState } from "react";
import TopBar from "../../Components/Admin/Dashboard/TopBar";
import { FiEdit, FiTrash } from "react-icons/fi";

const CrimeCategory = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Theft",
      subCategory: "Robbery",
      createdAt: "2025-01-28T12:43:06.073Z",
      updatedAt: "2025-01-28T14:00:00.000Z",
      isDeleted: false,
    },
    {
      id: 2,
      category: "Assault",
      subCategory: "Physical Attack",
      createdAt: "2025-01-29T12:43:06.073Z",
      updatedAt: "2025-01-29T14:00:00.000Z",
      isDeleted: false,
    },
    {
      id: 3,
      category: "Fraud",
      subCategory: "Identity Theft",
      createdAt: "2025-01-30T12:43:06.073Z",
      updatedAt: "2025-01-30T14:00:00.000Z",
      isDeleted: false,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  // Open modal for editing or adding a category
  const handleOpenModal = (category = null) => {
    setEditCategory(category);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setEditCategory(null);
    setShowModal(false);
  };

  // Delete category
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      fetch(`/api/categories/${id}`, { method: "DELETE" })
        .then(() => setCategories(categories.filter((cat) => cat.id !== id)))
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
            <span>Add New Category</span>
          </button>
        }
      />
      <div className="p-5">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-1.5">ID</th>
              <th className="text-start p-1.5">Category</th>
              <th className="text-start p-1.5">Sub-Category</th>
              <th className="text-start p-1.5">Created At</th>
              <th className="text-start p-1.5">Updated At</th>
              <th className="text-start p-1.5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                category={category}
                handleOpenModal={handleOpenModal}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg">
            <CategoryForm
              category={editCategory}
              onClose={handleCloseModal}
              onSave={(newCategory) => {
                if (editCategory) {
                  // Update existing category
                  setCategories((prev) =>
                    prev.map((cat) =>
                      cat.id === newCategory.id ? newCategory : cat
                    )
                  );
                } else {
                  // Add new category
                  setCategories((prev) => [...prev, newCategory]);
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

export default CrimeCategory;

// Table Row Component
const TableRow = ({ category, handleOpenModal, handleDelete }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5">{category.id}</td>
      <td className="p-1.5">{category.category}</td>
      <td className="p-1.5">{category.subCategory}</td>
      <td className="p-1.5">{new Date(category.createdAt).toLocaleString()}</td>
      <td className="p-1.5">{new Date(category.updatedAt).toLocaleString()}</td>
      <td className="w-8 flex flex-row content-center m-2">
        <button
          className="text-blue-600 hover:underline"
          onClick={() => handleOpenModal(category)}
        >
          <FiEdit size={20} />
        </button>
        <button
          className="text-red-600 hover:underline ml-2"
          onClick={() => handleDelete(category.id)}
        >
          <FiTrash size={20} />
        </button>
      </td>
    </tr>
  );
};

// Category Form Component
const CategoryForm = ({ category, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    category || {
      category: "",
      subCategory: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = category ? "PUT" : "POST";
    const endpoint = category
      ? `/api/categories/${category.id}`
      : "/api/categories";

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
        <label className="block text-sm font-bold mb-2">Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2">Sub-Category:</label>
        <input
          type="text"
          name="subCategory"
          value={formData.subCategory}
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </div>
    </form>
  );
};
