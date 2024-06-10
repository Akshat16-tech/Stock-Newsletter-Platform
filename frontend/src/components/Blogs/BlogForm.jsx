import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewBlog } from "../../actions/blog";
import { BLOG_ERROR_OCCURRED } from "../../constants/actions";

export default function Blog() {
  const Blog = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitNewBlog = (e) => {
    e.preventDefault();
    dispatch({ type: BLOG_ERROR_OCCURRED, payload: "" });
    dispatch(createNewBlog(form));
  };

  return (
    <>
      <div className="text-white max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={handleSubmitNewBlog} encType="multipart/form-data">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            className="text-black"
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <div id="editor"></div>
          <textarea
            id="markdown_input"
            className="text-black"
            name="content"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="Tag">Tag:</label>
          <br />
          <input
            className="text-black"
            type="text"
            id="tag"
            name="tag"
            onChange={handleChange}
          />
          <br />

          <label htmlFor="media">Upload Image:</label>
          <br />
          <input
            type="file"
            id="media"
            name="media"
            multiple
            accept="image/*,video/*"
            onChange={handleChange}
          />
          <br />

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}
