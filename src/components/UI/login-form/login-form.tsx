import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./login-form.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { signIn } from "../../../services/actions/auth";
import useForm from "../../../hooks/useForm";
import { FC, SyntheticEvent } from "react";
import { useAppDispatch } from "../../../hooks/redux";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [form, handleChangeForm] = useForm({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(signIn(form));

    navigate(location.state?.from || "/");
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        onChange={handleChangeForm}
        placeholder={"E-mail"}
        value={form.email}
        name={"email"}
        extraClass="mb-2"
      />
      <PasswordInput
        onChange={handleChangeForm}
        value={form.password}
        placeholder={"Пароль"}
        name={"password"}
        extraClass="mb-2"
      />
      <Button htmlType="submit" type="primary" size="medium">
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
