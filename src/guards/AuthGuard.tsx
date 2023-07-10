import React, { useEffect } from "react";
import { useGlobalState } from "../global/store";
import { useNavigate } from "react-router-dom";
import { toaster } from "../utils/toaster";
import { WriteRoutes } from "../constants/routes";
interface IAuthGuardProps {
  component: any;
}

export const AuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { user } = useGlobalState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      toaster.error("You are not authenticated.");
      navigate(WriteRoutes.SIGN_IN);
    }
  }, [navigate, user]);

  return <>{component}</>;
};

export const UnAuthGuard: (props: IAuthGuardProps) => any = ({ component }) => {
  const { user } = useGlobalState();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      toaster.success("You are authenticated.");
      navigate(WriteRoutes.HOME);
    }
  }, [navigate, user]);

  return <>{component}</>;
};
