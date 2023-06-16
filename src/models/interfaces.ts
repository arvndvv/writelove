import { Dispatch, SetStateAction } from "react";

export interface IGlobalState {
    user: {
        name: string;
        email: string;
    };
    authenticated: boolean;
    blogs: IBlog[];
}
export interface IGlobalStateContext {
    globalState: IGlobalState;
    setGlobalState: Dispatch<SetStateAction<IGlobalState>>;
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
    id: string
}
export interface ICategories {
    [ECategories.CUSTOM]: ITopic[],
    [ECategories.ICP]: ITopic[],
    [ECategories.MISSION]: ITopic[],
    [ECategories.PRODUCT]: ITopic[],
}