import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../services/actions/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    dispatch(signIn({ email, password }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        justifySelf: "end",
        alignSelf: "center",
        flex: "50%",
      }}
    >
      <p className="text text_type_main-medium">Вход</p>
      <p className="text text_type_main-medium">{email}</p>
      <p className="text text_type_main-medium">{password}</p>

      <EmailInput
        onChange={onChangeEmail}
        placeholder={"E-mail"}
        value={email}
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
      <Button onClick={onSubmit} htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <p className="text text_type_main-small primary mt-20 mb-24 text_color_inactive">
        Вы — новый пользователь?
        <Link className="pl-2" style={{ color: "#4C4CFF" }} to="/login">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-small primary text_color_inactive">
        Забыли пароль?
        <Link className="pl-2 link" style={{ color: "#4C4CFF" }} to="/login">
          Востановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
