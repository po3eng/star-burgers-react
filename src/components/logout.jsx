import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../services/actions/auth";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  return <Navigate to="/login" replace />;
};

export default Logout;
