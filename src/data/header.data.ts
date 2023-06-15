import { WriteRoutes } from "../constants/routes";
import { IHeaderLinks } from "../models/interfaces";

export const signedInLinks: IHeaderLinks[] = [
    {
        name: "Home",
        path: WriteRoutes.HOME,
    },
    {
        name: "Recommendations",
        path: WriteRoutes.RECOMMENDATIONS,
    },
];

export const signedOutLinks: IHeaderLinks[] = [
    {
        name: "Sign In",
        path: WriteRoutes.SIGN_IN,
    },
];