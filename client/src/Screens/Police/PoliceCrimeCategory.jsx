// import React, { Suspense } from "react";
// import { Await, useLoaderData } from "react-router-dom";
// import TopBar from "../../Components/Dashboard/Topbar/TopBar";
// import Spinner from "../../Components/Spinner";
// import { FiTrash } from "react-icons/fi";

// const PoliceCrimeCategory = () => {
//   const { crimeCategoryList } = useLoaderData(); // Fetch crime category data

//   return (
//     <>
//       <TopBar rightButton={""} />
//       <div className="p-5">
//         <Suspense fallback={<Spinner />}>
//           <Await resolve={crimeCategoryList}>
//             {(categories) => 
//               {
//                 console.log('====================================');
//                 console.log("====> ",categories);
//                 console.log('====================================');
//                 return (
//               <table className="w-3/4 table-auto border-collapse border border-gray-200" >
//                 <thead>
//                   <tr className="bg-stone-100 text-sm font-normal text-stone-500">
//                     <th className="text-start p-1.5 border border-gray-300">ID</th>
//                     <th className="text-start p-1.5 border border-gray-300">Category</th>
//                     <th className="text-start p-1.5 border border-gray-300">Sub-Category</th>
//                     <th className="text-start p-1.5 border border-gray-300">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>

//                   {categories?.map((category) => (
//                     <TableRow key={category.id} category={category} />
//                   ))}
//                 </tbody>
//               </table>)
//               }}
//           </Await>
//         </Suspense>
//       </div>
//     </>
//   );
// };

// export default PoliceCrimeCategory;

// // Table Row Component
// const TableRow = ({ category }) => {
//   return (
//     <tr className="text-sm border-b-2">
//       <td className="p-1.5 border border-gray-300">{category.id }</td>
//       <td className="p-1.5 border border-gray-300">{category.category}</td>
//       <td className="p-1.5 border border-gray-300">{category.subCategory}</td>
//     </tr>
//   );
// };


import React, { Suspense, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import Spinner from "../../Components/Spinner";

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
              <table className="w-3/4 table-auto border-collapse border border-gray-200">
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
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Add New Crime Category</h2>
      <form>
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Sub-Category"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Save
        </button>
        <button onClick={onClose} className="ml-2 text-gray-600">Cancel</button>
      </form>
    </div>
  );
};
