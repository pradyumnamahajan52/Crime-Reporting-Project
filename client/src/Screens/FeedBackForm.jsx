import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Form, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

export default function PoliceFeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const actionData = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  const handleRating = (value) => {
    setRating(value);
  };

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    }
    if (actionData?.success) {
      toast.success("Feedback submitted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  }, [actionData, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-quicksand font-semibold w-full mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <div className="my-20 mx-40">
        <Form method="POST">
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
            <input type="hidden" name="rating" id="rating" value={rating} />
          </div>

          {/* Feedback Textarea */}
          <div className="mt-6">
            <label className="font-semibold text-black">
              Any Queries or Feedback?
            </label>
            <textarea
            id="comments"
              name="comments"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              style={{ border: "2px solid #17A2B8" }}
              className="w-full border p-2 rounded-md mt-2"
              rows="4"
              placeholder="Please provide any further suggestions or comments."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <motion.button
              type="submit"
              className="bg-[#17A2B8] text-white px-6 py-2 rounded-md hover:bg-[#138496] disabled:opacity-50"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.1 } : {}}
              whileTap={!isSubmitting ? { scale: 0.9 } : {}}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </motion.button>
          </div>
        </Form>
      </div>
    </motion.div>
  );
}
