import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getBlogs, removeBlog } from "../../../actions/blog";
import BlogForm from "./BlogForm";
import BlogSkeleton from "./BlogSkeleton";
import Modal from "../../Common/Modal";

export default function BlogParent() {
  const blogs = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  console.log("blog", blogs);

  return (
    <>
      <div className="pt-10 pe-3">
        <div className="flex justify-end items-center">
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#374151] rounded-md focus:outline-none focus:bg-gray-600"
          >
            Create Blog
          </button>
        </div>
        {blogs}

        {blogs ? (
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
          ))) : (<BlogSkeleton />)}
      </div>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title="Create Blog"
      >
        <BlogForm handleCloseModal={handleCloseModal}/>
      </Modal>
    </>
  );
}
