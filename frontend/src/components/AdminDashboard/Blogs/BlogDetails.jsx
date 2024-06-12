import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../actions/blog";

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const blog = useSelector((state) => state.blogsReducer.blog);
  const error = useSelector((state) => state.blogsReducer.error);

  useEffect(() => {
    if (!blog || blog._id !== id) {
      dispatch(getBlogById(id));
    }
  }, [dispatch, id, blog]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        className="w-full h-auto mb-4"
        src={`${process.env.REACT_APP_STOCKS_API}?filename=${blog.image}`}
        alt={blog.title}
      />
      <p className="mb-4">{blog.content}</p>
      <p className="text-gray-700">{blog.tag}</p>
    </div>
  );
};

export default BlogDetail;
