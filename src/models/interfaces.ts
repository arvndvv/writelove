import { Dispatch, SetStateAction } from "react";

export interface IGlobalState {
    user: {
        name: string;
        email: string;
    };
    authenticated: boolean;
}
export interface IGlobalStateContext {
    globalState: IGlobalState;
    setGlobalState: Dispatch<SetStateAction<IGlobalState>>;
}
export interface IHeaderLinks {
    name: string;
    path: string;
}

export interface IPerson {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}
export interface ITopicBasic {
    name: string;
    keywords: string[];

}
export interface ITopic extends ITopicBasic {
    id: string;
}

export interface ICategories {
    [ECategories.CUSTOM]: ITopic[],
    [ECategories.ICP]: ITopic[],
    [ECategories.MISSION]: ITopic[],
    [ECategories.PRODUCT]: ITopic[],
}
export enum ECategories {
    ALL = "all",
    CUSTOM = "custom",
    ICP = "icp",
    MISSION = "mission",
    PRODUCT = "product",
}