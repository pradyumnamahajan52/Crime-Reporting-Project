import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0  flex justify-center items-center h-full">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
