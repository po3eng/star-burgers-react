import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const ResetPassword = () => {

  const [password, setPassword] = useState();
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [token, setToken] = useState();
  const inputRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        alignSelf: "center",
        flex: "50%",
      }}
    >
      <p className="text text_type_main-medium">Восстановление пароля</p>

      <PasswordInput
        onChange={onChangePassword}
        placeholder={"Введите новый пароль"}
        value={password}
        name={"password"}
        extraClass="mb-2"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        onChange={(e) => setToken(e.target.value)}
        value={token}
        name={"name"}
        ref={inputRef}
        size={"default"}
        extraClass="ml-1"
      />
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
      </Button>
      <p className="text text_type_main-small text_color_inactive pt-20">
        Вспомнили пароль?
        <Link className="pl-2" to="/login" style={{ color: "#4C4CFF" }}>
          Войти
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
