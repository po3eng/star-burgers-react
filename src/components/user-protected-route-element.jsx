import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";
import PropTypes from "prop-types";

// Куда не может попасть авторизованный пользователь:
// Маршруты /login и /register.
// Маршруты /forgot-password и /reset-password.

const UserProtectedRouteElement = ({ element }) => {
  const token = getCookie("token");
  return token ? <Navigate to="/" replace /> : element;
};

UserProtectedRouteElement.propTypes = {
  element: PropTypes.func.isRequired,
};

export default UserProtectedRouteElement;
