import { IGlobalState } from "../models/interfaces";

const userInitialState = {
    personal_details: {
        name: "Arv Ind",
        email: "john@writelove.com",
    },
    id: "user-1",
    authenticated: false,
};
export const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : userInitialState;
};
export const setUser = (user: IGlobalState) => {
    localStorage.setItem("user", JSON.stringify(user));
}
export const generateUserId = () => {
    const user = getUser();
    const id = Number(user.id.split('-')[1]);
    return 'user-' + (id + 1);
}


