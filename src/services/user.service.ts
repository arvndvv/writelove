import { IUser } from "../models/interfaces";

const userInitialState = {
    personal_details: {
        name: "Arv Ind",
        email: "john@writelove.com",
    },
    id: "user-1",
    authenticated: false,
};
const usersInitial = [
    userInitialState
]
export const getAllUsers = () => {
    const users = localStorage.getItem("users");
    if (!users) {
        localStorage.setItem("users", JSON.stringify(usersInitial));
    }
    return users ? JSON.parse(users) : usersInitial;
}
export const getCurrentUser = () => {
    const user = localStorage.getItem("currenrUser");
    return user ? JSON.parse(user) : null;
}

export const setCurrentUser = (user: IUser | null) => {
    localStorage.setItem("currenrUser", JSON.stringify(user));
}
export const generateUserId = () => {
    const users = getAllUsers() || [];
    const id = users.length + 1;
    return 'user-' + id;
}


