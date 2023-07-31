import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log(slug);
  const navigate = useNavigate();
  return (
    <div>
      Blog Page Details
      <button
        className="p-4 text-white bg-green-500 font-semibold rounded-lg"
        onClick={() => navigate("/blog")}
      >
        Navigate to Blog Page
      </button>
    </div>
  );
};

export default BlogPageDetails;
