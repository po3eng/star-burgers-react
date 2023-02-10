import { Link, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "90px",
        }}
      >
        <Link
          to="/profile"
          style={{ height: "64px", width: "320px" }}
          className="text text_type_main-medium"
        >
          Профиль
        </Link>
        <Link
          to="/profile/orders"
          style={{ height: "64px", width: "320px" }}
          className="text text_type_main-medium text_color_inactive"
        >
          История заказов
        </Link>
        <p
          style={{ height: "64px", width: "320px" }}
          className="text text_type_main-medium text_color_inactive"
        >
          Выход
        </p>
        <p
          style={{ height: "64px", width: "320px" }}
          className="text text_type_main-small text_color_inactive pt-20"
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
