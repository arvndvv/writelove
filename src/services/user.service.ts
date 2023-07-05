import { IGlobalState } from "../models/interfaces";

const initialState = {
    user: {
        name: "John Doe",
        email: "john@writelove.com",
        id: "user-1",
    },
    blogs: [],
    authenticated: false,
};
export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : initialState;
};
export const setUser = (user: IGlobalState) => {
    localStorage.setItem("user", JSON.stringify(user));
}

