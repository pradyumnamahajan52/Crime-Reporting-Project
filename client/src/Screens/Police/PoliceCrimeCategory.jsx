import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";
import Spinner from "../../Components/Spinner";
import { FiTrash } from "react-icons/fi";

const PoliceCrimeCategory = () => {
  const { crimeCategoryList } = useLoaderData(); // Fetch crime category data

  return (
    <>
      <TopBar rightButton={""} />
      <div className="p-5">
        <Suspense fallback={<Spinner />}>
          <Await resolve={crimeCategoryList}>
            {(categories) => 
              {
                console.log('====================================');
                console.log("====> ",categories);
                console.log('====================================');
                return (
              <table className="w-3/4 table-auto border-collapse border border-gray-200" >
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
              </table>)
              }}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default PoliceCrimeCategory;

// Table Row Component
const TableRow = ({ category }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-300">{category.id }</td>
      <td className="p-1.5 border border-gray-300">{category.category}</td>
      <td className="p-1.5 border border-gray-300">{category.subCategory}</td>
    </tr>
  );
};
