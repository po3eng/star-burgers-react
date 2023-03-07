import { Navigate } from "react-router-dom";
import { logout } from "../services/actions/auth";
import { FC } from "react";
import { useAppDispatch } from "../hooks/redux";

const Logout: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(logout());
  return <Navigate to="/login" replace />;
};

export default Logout;
