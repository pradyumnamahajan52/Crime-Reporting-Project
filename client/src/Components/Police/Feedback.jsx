import React from 'react';

const Feedback = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Leave your feedback here..."></textarea>
    </div>
  );
}

export default Feedback;
