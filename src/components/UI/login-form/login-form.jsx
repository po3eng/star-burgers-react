import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./login-form.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signIn } from "../../../services/actions/auth";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const onSubmit = () => {
    dispatch(signIn(form));
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        onChange={onChangeEmail}
        placeholder={"E-mail"}
        value={form.email}
        name={"email"}
        extraClass="mb-2"
      />
      <PasswordInput
        onChange={onChangePassword}
        value={form.password}
        placeholder={"Пароль"}
        name={"password"}
        extraClass="mb-2"
      />
      <Button type="primary" size="medium">
        Войти
      </Button>
      <p className="text text_type_main-small primary mt-20 mb-24 text_color_inactive">
        Вы — новый пользователь?
        <Link className={`pl-2 ${classes.link}`} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-small primary text_color_inactive">
        Забыли пароль?
        <Link className={`pl-2 ${classes.link}`} to="/forgot-password">
          Востановить пароль
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
