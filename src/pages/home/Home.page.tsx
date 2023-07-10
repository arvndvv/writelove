import React from "react";
import { useGlobalState } from "../../global/store";
import { Blogs } from "../blogs/Blogs.page";
import { Landing } from "../landing/Landing.page";

export const Home = () => {
  const { user } = useGlobalState();
  return <>{user ? <Blogs /> : <Landing />}</>;
};
