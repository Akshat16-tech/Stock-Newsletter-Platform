import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs, getBlogById } from "../../../actions/blog";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../Common/Modal";
import BlogForm from "./BlogForm";
import BlogSkeleton from "./BlogSkeleton";

export default function BlogParent() {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getBlogs());
    if (id) {
      dispatch(getBlogById(id));
    }
    console.log("blogs:", blogs);
  }, [dispatch, id]);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <div className="p-[2%] pe-3">
        <div className="flex justify-end items-center">
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#374151] rounded-md focus:outline-none focus:bg-gray-600"
          >
            Create Blog
          </button>
        </div>
        <div className="container mx-auto p-4">
          {Array.isArray(blogs) ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.slice(0, 3).map((blog) => (
                <div
                  key={blog._id}
                  className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col cursor-pointer"
                  onClick={() => handleCardClick(blog._id)}
                >
                  <img
                    className="rounded-t-lg w-full h-48 bg-cover bg-no-repeat"
                    src={`${process.env.REACT_APP_STOCKS_API}?filename=${blog.image}`}
                    alt=""
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.title}
                    </h5>
                    <div className="flex-grow">
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate-multiline h-12">
                        {blog.content}
                      </p>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {blog.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <BlogSkeleton />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .truncate-multiline {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title="Create Blog"
      >
        <BlogForm handleCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
}
