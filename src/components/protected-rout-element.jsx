import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../utils/cookies";
import PropTypes from "prop-types";

const ProtectedRoute = ({ element, anonymous = false }) => {
  const isLoggedIn = getCookie("token");
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

ProtectedRoute.propsTypes = {
  children: PropTypes.func.isRequired,
  anonymous: PropTypes.bool,
};

export default ProtectedRoute;
