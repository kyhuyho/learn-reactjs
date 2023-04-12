import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "tom" });
  }, []);
  return <div>Blog Page</div>;
};

export default BlogPage;
