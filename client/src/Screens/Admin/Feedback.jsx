import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TopBar from "../../Components/Dashboard/Topbar/TopBar";

const Feedback = () => {
  const { feedbackData } = useLoaderData(); // Fetch data from the loader
  const feedbacks = feedbackData || []; // Handle undefined feedback data

  return (
    <>
      <TopBar />
      <div className="p-5">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-1.5 border border-gray-300">ID</th>
              <th className="text-start p-1.5 border border-gray-300">Email</th>
              <th className="text-start p-1.5 border border-gray-300">Rating</th>
              <th className="text-start p-1.5 border border-gray-300">Comments</th>
              <th className="text-start p-1.5 border border-gray-300">Created At</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.data.length > 0 ? (
              feedbacks.data.map((feedback) => (
                <FeedbackRow key={feedback.id} feedback={feedback} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-2">
                  No feedback available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Feedback;

const FeedbackRow = ({ feedback }) => {
  return (
    <tr className="text-sm border-b-2">
      <td className="p-1.5 border border-gray-300">{feedback.id}</td>
      <td className="p-1.5 border border-gray-300">{feedback.email}</td>
      <td className="p-1.5 border border-gray-300">
        <RatingStars rating={feedback.rating} />
      </td>
      <td className="p-1.5 border border-gray-300">{feedback.comments}</td>
      <td className="p-1.5 border border-gray-300">
        {new Date(feedback.createdAt).toLocaleString()}
      </td>
    </tr>
  );
};

const RatingStars = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: totalStars }, (_, index) => (
        index < rating ? (
          <AiFillStar key={index} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={index} className="text-yellow-500" />
        )
      ))}
    </div>
  );
};
