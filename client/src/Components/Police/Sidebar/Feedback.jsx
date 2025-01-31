import React from 'react';

const Feedback = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Leave your feedback here..."></textarea>
      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#138496]">
          Submit Feedback
        </button>
      </div>
    </div>
    
  );
}

export default Feedback;
