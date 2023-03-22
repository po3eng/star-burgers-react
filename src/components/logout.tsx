import { Navigate } from "react-router-dom";
import { logoutThunk } from "../services/actions/auth";
import { FC } from "react";
import { useAppDispatch } from "../hooks/redux";

const Logout: FC = () => {
  const dispatch = useAppDispatch();
  dispatch(logoutThunk());
  return <Navigate to="/login" replace />;
};

export default Logout;
