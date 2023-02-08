import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [mail, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [value, setValue] = useState();
  const inputRef = useRef(null);

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
        <p
          style={{ height: "64px", width: "320px" }}
          className="text text_type_main-medium"
        >
          Профиль
        </p>
        <Link to="/profile/orders"
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"name"}
          ref={inputRef}
          size={"default"}
          extraClass="mb-2"
        />
        <EmailInput
          onChange={onChangeEmail}
          placeholder={"E-mail"}
          value={mail}
          name={"email"}
          extraClass="mb-2"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          placeholder={"Пароль"}
          name={"password"}
          extraClass="mb-2"
        />
      </div>
    </div>
  );
};

export default Profile;
