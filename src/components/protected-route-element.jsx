import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element }) => {
  return element;

  return <Navigate to="/login" replace />;
};

export default ProtectedRouteElement;
