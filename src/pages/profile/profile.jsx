import { Link, Navigate, Outlet } from "react-router-dom";
import classes from "./profile.module.css";
import { getCookie } from "../../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CLEAR_USER, logout, userData } from "../../services/actions/auth";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    user && dispatch(userData());
  }, []);

  const onExit = () => {
    dispatch(logout(getCookie("token")));
  };

  return (
    <div className={classes.wrap}>
      {!user && <Navigate to="/login" replace></Navigate>}

      <div className={classes.links}>
        <Link
          to="/profile"
          className={`text text_type_main-medium text_color_inactive ${classes.item}`}
        >
          Профиль
        </Link>
        <Link
          to="/profile/orders"
          className={`text text_type_main-medium text_color_inactive ${classes.item}`}
        >
          История заказов
        </Link>
        <p
          onClick={onExit}
          className={`text text_type_main-medium text_color_inactive ${classes.item}`}
        >
          Выход
        </p>
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
