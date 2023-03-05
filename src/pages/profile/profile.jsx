import {
  Link,
  Navigate,
  Outlet,
  useMatch,
  useNavigate,
} from "react-router-dom";
import classes from "./profile.module.css";
import { getCookie } from "../../utils/cookies";
import { useDispatch } from "react-redux";
import { userData } from "../../services/actions/auth";
import HeaderItem from "../../components/UI/app-header-item/app-header-item";
import { useEffect } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    navigate("/profile/form");
  }, []);

  const token = getCookie("refreshToken");

  useEffect(() => {
    token && dispatch(userData());
  }, []);

  const textClass = "text text_type_main-medium";
  return (
    <div className={classes.wrap}>
      <div className={classes.links}>
        <HeaderItem
          end
          to="/profile/form"
          textClass={textClass}
          text="Профиль"
        ></HeaderItem>
        <HeaderItem
          to="/profile/orders"
          textClass={textClass}
          text="История заказов"
        ></HeaderItem>
        <HeaderItem
          to="/logout"
          textClass={textClass}
          text="Выход"
        ></HeaderItem>
        <p
          className={`text text_type_main-small text_color_inactive pt-20 ${classes.item}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
