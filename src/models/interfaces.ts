import { Dispatch } from "react";

export interface IUser {
    personal_details: {
        name: string;
        email: string;
    };
    id: string;
    authenticated: boolean;
}
export interface IGlobalState {
    user: IUser;
    blogs: IBlog[];
}
export interface IGlobalStateContext extends IGlobalState {
    setGlobalState: Dispatch<IAction>;
}
export interface IHeaderLinks {
    name: string;
    path: string;
}


export interface ITopicBasic {
    name: string;
    keywords: string[];

}
export interface ITopic extends ITopicBasic {
    id: string;
    category: string;
}


export enum ECategories {
    ALL = "all",
    CUSTOM = "custom",
    ICP = "icp",
    MISSION = "mission",
    PRODUCT = "product",
}

export interface IBlog {
    name: string,
    description: string,
    keywords: string[],
    id: string,
    author: string,
    date_created: string,
    author_id: string,
}
export interface ICategory {
    name: string;
    value: string;
}


export enum EActions {
    UPDATE_USER = "UPDATE_USER",
    ADD_USER = "ADD_USER",
    UPDATE_BLOGS = "UPDATE_BLOGS",
    ADD_BLOG = "ADD_BLOG",
    DELETE_BLOG = "DELETE_BLOG",
    UPDATE_AUTHENTICATION = "UPDATE_AUTHENTICATION",
}

export interface IAction {
    type: EActions;
    payload: any;
}