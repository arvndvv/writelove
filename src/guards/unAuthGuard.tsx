import { Navigate, Outlet, useLocation } from "react-router-dom";
import { WriteRoutes } from "../constants/routes";
import { useGlobalState } from "../global/store";

const UnAuthGuard = () => {
  const { user } = useGlobalState();
  const location = useLocation();
  return user ? (
    <Navigate to={WriteRoutes.BASE} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default UnAuthGuard;
