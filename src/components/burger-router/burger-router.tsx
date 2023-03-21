import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import HomePage from "../../pages/home-page/home-page";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import IngredientPage from "../../pages/ingredients/ingredients";
import Order from "../../pages/order/order";

import Orders from "../../pages/orders/orders";

import { NotFound404 } from "../../pages/not-found/not-found";
import Profile from "../UI/profile/profile";
import Modal from "../UI/modal/modal";

import Logout from "../logout";
import ProtectedRoute from "../protected-rout-element";
import { FC } from "react";
import Feed from "../../pages/feed/feed";
import { useAppDispatch } from "../../hooks/redux";
import { clearCurrentOrder } from "../../services/actions/order";

const BurgerRouter: FC = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClose = () => navigate("/");
  const onCloseOrderDetail = (type: string) => {
    navigate(`/${type}`);
    dispatch(clearCurrentOrder());
  };

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ProtectedRoute anonymous element={<Login />} />} />
        <Route path="/register" element={<ProtectedRoute anonymous element={<Register />} />} />
        <Route path="/forgot-password" element={<ProtectedRoute anonymous element={<ForgotPassword />} />} />
        <Route path="/reset-password" element={<ProtectedRoute anonymous element={<ResetPassword />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />}>
          <Route index path="form" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<ProtectedRoute element={<Order />} />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
        <Route path="/logout" element={<ProtectedRoute element={<Logout />} />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:id" element={<Order />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal header="Детали ингредиента" handleCloseModal={onClose}>
                <IngredientPage />
              </Modal>
            }
          />
          <Route
            path="feed/:id"
            element={
              <Modal handleCloseModal={() => onCloseOrderDetail("feed")}>
                <Order />
              </Modal>
            }
          />
          <Route
            path="/profile/orders/:id"
            element={
              <Modal handleCloseModal={() => onCloseOrderDetail("profile/orders")}>
                <Order />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default BurgerRouter;
