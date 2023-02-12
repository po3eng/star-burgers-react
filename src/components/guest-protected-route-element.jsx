import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookies";
import PropTypes from "prop-types";

// Куда не может попасть неавторизованный пользователь:
// Маршрут /profile.
// Все вложенные в /profile маршруты.
// Все остальные маршруты не защищены.

const GuestProtectedRouteElement = ({ element }) => {
  const token = getCookie("token");
  return token ? element : <Navigate to="/login" replace />;
};

GuestProtectedRouteElement.propTypes = {
  element: PropTypes.func.isRequired,
};

export default GuestProtectedRouteElement;
