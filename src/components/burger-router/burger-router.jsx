import { Routes, Route } from "react-router-dom";

import HomePage from "../../pages/home-page";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgot-password";
import ResetPassword from "../../pages/reset-password";
import Profile from "../../pages/profile";
import IngredientPage from "../../pages/ingredients";
import { NotFound404 } from "../../pages/not-found";
const BurgerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ingredients/:id" element={<IngredientPage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default BurgerRouter;
