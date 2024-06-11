import {
  GET_ALL_BLOGS,
  CREATE_BLOGS,
  REMOVE_BLOGS,
} from "../constants/actions";

const blogsReducer = (blogs = [], action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      console.log("action.payload",action.payload);
      return action.payload;
    case REMOVE_BLOGS:
      return action.payload;
    case CREATE_BLOGS:
      return action.payload;
    default:
      return blogs;
  }
};

export default { blogsReducer };
