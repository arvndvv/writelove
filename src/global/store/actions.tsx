import { addNewBlog, setBlogs } from "../../services/blog.service";
import { setCurrentUser, updateUserName } from "../../services/user.service";

export function handleSignInSignOut(state, payload) {
  const user = payload ? { ...payload, authenticated: true } : null;
  setCurrentUser(user);
  return {
    ...state,
    user,
  };
}
export function handleAddBlog(state, payload) {
  const blogs = addNewBlog(payload);
  return {
    ...state,
    blogs,
  };
}

export function handleDeleteBlog(state, payload) {
  const blogs = state.blogs.filter((blog) => blog.id !== payload);
  setBlogs(blogs);
  return { ...state, blogs };
}
export const handleUserNameUpdate = (state, payload) => {
  updateUserName(payload);
  return {
    ...state,
    user: {
      ...state.user,
      personal_details: { ...state.user.personal_details, name: payload },
    },
  };
};
