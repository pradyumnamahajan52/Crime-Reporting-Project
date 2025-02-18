import React, { Suspense, useState } from "react";
import { Await, useLoaderData, Form } from "react-router-dom";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import Spinner from "../../Components/Spinner";
import { toast } from "react-toastify";
import { newCrimeCategory } from "../../action/police/NewCrimeCategory";


const PoliceCrimeCategory = () => {
  const { crimeCategoryList } = useLoaderData(); // Fetch crime category data
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <TopBar
        rightButton={
          <button
            onClick={handleOpenModal}
            className="flex text-sm items-center gap-2 bg-primary transition-colors hover:bg-primary-400 text-white px-3 py-1.5 rounded"
          >
            <span>Add New Crime Category</span>
          </button>
        }
      />
      <div className="p-5">
        <Suspense fallback={<Spinner />}>
          <Await resolve={crimeCategoryList}>
            {(categories) => (
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-stone-100 text-sm font-normal text-stone-500">
                    <th className="text-start p-1.5 border border-gray-300">ID</th>
                    <th className="text-start p-1.5 border border-gray-300">Category</th>
                    <th className="text-start p-1.5 border border-gray-300">Sub-Category</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((category) => (
                    <TableRow key={category.id} category={category} />
                  ))}
                </tbody>
              </table>
            )}
          </Await>
        </Suspense>
      </div>

      {/* 🔹 MODAL: Add Crime Category */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-1/3 p-6 shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <CrimeCategoryForm onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default PoliceCrimeCategory;

// Table Row Component
const TableRow = ({ category }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-300">{category.id}</td>
      <td className="p-1.5 border border-gray-300">{category.category}</td>
      <td className="p-1.5 border border-gray-300">{category.subCategory}</td>
    </tr>
  );
};

const CrimeCategoryForm = ({ onClose }) => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      console.log("Submitting form data:", { category, subCategory });
  
      const response = await newCrimeCategory({ category, subCategory });

      console.log("Response from newCrimeCategory:", response);
  
      if (response.status === 200) {
        toast.success("Crime category added successfully!");
        onClose();
      } else {
        throw new Error("Failed to add crime category");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error adding crime category");
    }
  };
  
  
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Add New Crime Category</h2>
      <Form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          name="subCategory"
          placeholder="Sub-Category"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          required
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" onClick={onClose} className="ml-2 text-gray-600">
          Cancel
        </button>
      </Form>
    </div>
  );
};