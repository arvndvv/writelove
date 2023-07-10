import { addNewBlog } from "../../services/blog.service";
import { setCurrentUser } from "../../services/user.service";

export function HandleSignInSignOut(state, payload) {
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
