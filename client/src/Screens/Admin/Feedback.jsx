import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TopBar from "../../Components/Admin/Dashboard/TopBar";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = React.useState([
    {
      id: 1,
      firstName: "Pradyumna",
      lastName: "Mahajan",
      email: "pradyumna@gmail.com",
      rating: 5,
      comments: "Excellent system, very helpful!",
      createdAt: "2025-01-28T12:43:06.073Z",
    },
    {
      id: 3,
      firstName: "Jasmine",
      lastName: "Kispotta",
      email: "jasmine@gmail.com",
      rating: 4,
      comments: "Average system, could use better UI.",
      createdAt: "2025-01-29T10:43:06.073Z",
    },
    {
      id: 2,
      firstName: "Lalini",
      lastName: "Shashu",
      email: "lalini@gmail.com",
      rating: 5,
      comments: "Good experience, but needs minor improvements.",
      createdAt: "2025-01-29T12:43:06.073Z",
    },
    {
      id: 4,
      firstName: "Mitali",
      lastName: "Gupta",
      email: "mitali@gmail.com",
      rating: 3,
      comments: "Great platform! Very intuitive.",
      createdAt: "2025-02-01T10:43:06.073Z",
    },
    {
      id: 5,
      firstName: "Pawan",
      lastName: "Gupta",
      email: "pawan@gmail.com",
      rating: 2,
      comments: "Needs a lot of improvement in functionality.",
      createdAt: "2025-02-01T10:43:06.073Z",
    },
  ]);

  return (
    <>
      <TopBar />
      <div className="p-5">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-stone-100 text-sm font-normal text-stone-500">
              <th className="text-start p-1.5">ID</th>
              <th className="text-start p-1.5">First Name</th>
              <th className="text-start p-1.5">Last Name</th>
              <th className="text-start p-1.5">Email</th>
              <th className="text-start p-1.5">Rating</th>
              <th className="text-start p-1.5">Comments</th>
              <th className="text-start p-1.5">Created At</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <FeedbackRow key={feedback.id} feedback={feedback} />
            ))}
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
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {feedback.id}
        </a>
      </td>
      <td className="p-1.5">{feedback.firstName}</td>
      <td className="p-1.5">{feedback.lastName}</td>
      <td className="p-1.5">{feedback.email}</td>
      <td className="p-1.5">
        <RatingStars rating={feedback.rating} />
      </td>
      <td className="p-1.5">{feedback.comments}</td>
      <td className="p-1.5">{new Date(feedback.createdAt).toLocaleString()}</td>
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
