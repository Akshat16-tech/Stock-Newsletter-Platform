import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getBlogs, removeBlog } from "../../actions/blog";
import BlogForm from "./BlogForm";

export default function BlogParent() {
  const blogs = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getBlogs(), removeBlog());
  }, [dispatch]);

  console.log("blogs", blogs);

  return (
    <>
      <div className="pt-20">
        <div className="flex justify-center items-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#374151] rounded-md focus:outline-none focus:bg-gray-600"
          >
            Create Blog
          </button>
        </div>
        {showForm && <BlogForm />}

        {blogs &&
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="text-white grid justify-center items-center"
            >
              <button onClick={() => removeBlog(blog._id)}>Delete Blog</button>
              {/* <button onClick={() => updateBlog(blog._id)}>Update Blog</button> */}
              <img
                src={`http://localhost:5000/${blog.image}`}
                alt="Blog"
                className="w-[500px] h-[500px]"
              />
              <h1 className="text-4xl font-bold">{blog.title}</h1>
              <p>{blog.content}</p>
              <h1 className="text-3xl font-bold">{blog.tag}</h1>
              <h3 className="font-bold">{blog.content}</h3>
              <br />
            </div>
          ))}
      </div>
    </>
  );
}
