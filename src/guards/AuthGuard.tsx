import React from "react";
import { useGlobalState } from "../global/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { WriteRoutes } from "../constants/routes";

const AuthGuard = () => {
  const { user } = useGlobalState();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={WriteRoutes.SIGN_IN} state={{ from: location }} replace />
  );
};

export default AuthGuard;
