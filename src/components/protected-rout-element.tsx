import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../utils/cookies";
import { FC, ReactElement } from "react";

export type TProtectedRoute = {
  element: ReactElement;
  anonymous?: boolean;
};

const ProtectedRoute: FC<TProtectedRoute> = ({ element, anonymous = false }) => {
  const isLoggedIn = getCookie("refreshToken");
  const location = useLocation();
  const from = location.state?.from || "/";
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return element;
};
export default ProtectedRoute;
