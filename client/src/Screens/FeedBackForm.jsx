import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PoliceFeedbackForm() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-quicksand font-semibold w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      {/* Title */}
      <h1 className="text-2xl font-bold text-[#17A2B8] text-center mb-4">
        POLICE STATION FEEDBACK FORM
      </h1>

      {/* Star Rating System */}
      <div className="mt-6">
        <span className="font-semibold text-black">RATE YOUR EXPERIENCE</span>
        <div className="flex space-x-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
              key={star}
              className={`cursor-pointer text-2xl ${
                rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRating(star)}
              whileHover={{ scale: 1.2 }}
            >
              ★
            </motion.span>
          ))}
        </div>
      </div>

      {/* Additional Comments */}
      <div className="mt-6">
        <label className="font-semibold text-black">
          Any Queries or feedback you want to give us?
        </label>
        <textarea
          style={{ border: "2px solid #17A2B8" }}
          className="w-full border p-2 rounded-md mt-2"
          rows="4"
          placeholder="Please provide any further suggestions or comments."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <motion.button
          className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#138496]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit Feedback
        </motion.button>
      </div>
    </motion.div>
  );
}
