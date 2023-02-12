import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../services/actions/auth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getCookie } from "../utils/cookies";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout(getCookie('token')));

  return <Navigate to="/login" replace />;
};

export default Logout;
