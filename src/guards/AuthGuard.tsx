import React, { useEffect } from "react";
import { useGlobalState } from "../global/store";
import { useNavigate } from "react-router-dom";
import { toaster } from "../utils/toaster";
import { WriteRoutes } from "../constants/routes";
interface IAuthGuardProps {
  component: any;
}

export const AuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { globalState } = useGlobalState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!globalState.user.authenticated) {
      toaster.error("You are not authenticated.");
      navigate(WriteRoutes.SIGN_IN);
    }
  }, [globalState, navigate]);

  return <>{component}</>;
};

export const UnAuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { globalState } = useGlobalState();
  const navigate = useNavigate();
  useEffect(() => {
    if (globalState.user.authenticated) {
      toaster.success("You are authenticated.");
      navigate(WriteRoutes.HOME);
    }
  }, [globalState, navigate]);

  return <>{component}</>;
};
