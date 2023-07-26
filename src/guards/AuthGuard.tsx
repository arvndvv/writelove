import React from "react";
import { useGlobalState } from "../global/store";
import { Navigate } from "react-router-dom";
import { toaster } from "../utils/toaster";
import { WriteRoutes } from "../constants/routes";
interface IAuthGuardProps {
  component: any;
}

export const AuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { user } = useGlobalState();
  if (!user) {
    toaster.error("You are not authenticated.");
    return <Navigate to={WriteRoutes.SIGN_IN} />;
  }
  return <>{component}</>;
};

export const UnAuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { user } = useGlobalState();
  if (user) {
    toaster.success("You are authenticated.");
    return <Navigate to={WriteRoutes.HOME} />;
  }
  return <>{component}</>;
};
