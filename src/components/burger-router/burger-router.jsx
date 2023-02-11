import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import HomePage from "../../pages/home-page/home-page";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredients/ingredients";
import { NotFound404 } from "../../pages/not-found/not-found";
import Orders from "../../pages/orders/orders";
import Profile from "../UI/profile/profile";
import Modal from "../UI/modal/modal";

import ProtectedRouteElement from "../protected-route-element";
const BurgerRouter = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  const navigate = useNavigate();
  const onClose = () => navigate("/");

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/forgot-password"
          element={<ProtectedRouteElement element={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<ProtectedRouteElement element={<ResetPassword />} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        >
          <Route index element={<Profile />} />
          {/* <Route path="/profile/orders" element={<Orders />} /> */}
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal header="Детали ингредиента" handleCloseModal={onClose}>
                <IngredientPage />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default BurgerRouter;
