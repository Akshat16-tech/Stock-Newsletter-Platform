import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../../actions/blog";
import { BLOG_ERROR_OCCURRED } from "../../constants/actions";

export default function Blog() {
  //   const Blog = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitNewBlog = (e) => {
    e.preventDefault();
    console.log("form", form);
    dispatch({ type: BLOG_ERROR_OCCURRED, payload: "" });
    dispatch(createBlog(form));
  };

  return (
    <>
      {/* <div className="text-white max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
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
      </div> */}

      <section className="max-w-4xl p-6 mx-auto bg-[#F3F4F6] rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold capitalize dark:text-white">
          Blog Details
        </h1>
        <form onSubmit={handleSubmitNewBlog} encType="multipart/form-data">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className=" dark:text-gray-200" for="username">
                Title
              </label>
              <input
                type="text"
                id="title"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" for="passwordConfirmation">
                Tag
              </label>
              <input
                type="text"
                id="tag"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className=" dark:text-gray-200" for="passwordConfirmation">
                Content
              </label>
              <textarea
                type="textarea"
                id="markdown_input"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium ">Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 "
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        id="media"
                        name="media"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleChange}
                      />
                    </label>
                    <p className="pl-1 ">or drag and drop</p>
                  </div>
                  <p className="text-xs ">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white  transition-colors duration-200 transform bg-[#374151] rounded-md focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
