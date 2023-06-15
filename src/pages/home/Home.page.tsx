import React from "react";
import { useGlobalState } from "../../global/store";
import { Blogs } from "../blogs/Blogs.page";
import { Landing } from "../landing/Landing.page";

export const Home = () => {
  const { globalState } = useGlobalState();
  return <>{globalState.authenticated ? <Blogs /> : <Landing />}</>;
};
