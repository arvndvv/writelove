import { EActions, IAction, IGlobalState } from "../../models/interfaces";
import {
  handleAddBlog,
  handleDeleteBlog,
  handleSignInSignOut,
  handleUserNameUpdate,
} from "./actions";

export function storeReducer(state: IGlobalState, action: IAction) {
  switch (action.type) {
    case EActions.UPDATE_USER: {
      return handleUserNameUpdate(state, action.payload);
    }
    case EActions.UPDATE_BLOGS: {
      return { ...state, blogs: action.payload };
    }
    case EActions.UPDATE_AUTHENTICATION: {
      return handleSignInSignOut(state, action.payload);
    }
    case EActions.ADD_BLOG: {
      return handleAddBlog(state, action.payload);
    }
    case EActions.DELETE_BLOG: {
      return handleDeleteBlog(state, action.payload);
    }
    default:
      throw new Error("action not found: " + action.type);
  }
}
