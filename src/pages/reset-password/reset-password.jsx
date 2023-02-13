import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./reset-password.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../services/actions/auth";
import useForm from "../../hooks/useForm";
const ResetPassword = () => {
  const [form, onChangeHandle] = useForm({ token: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(form));
    navigate("/login", { replace: true });
  };

  return (
    <form onSubmit={onSubmit} className={classes.container}>
      <p className="text text_type_main-medium">Восстановление пароля</p>
      <PasswordInput
        onChange={onChangeHandle}
        placeholder={"Введите новый пароль"}
        value={form.password}
        name={"password"}
        extraClass="mb-2"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        onChange={onChangeHandle}
        value={form.token}
        name={"name"}
        size={"default"}
        extraClass="ml-1"
      />
      <Button type="primary" size="medium">
        Сохранить
      </Button>
      <p className="text text_type_main-small text_color_inactive pt-20">
        Вспомнили пароль?
        <Link to="/login" className={`${classes.link} pl-2`}>
          Войти
        </Link>
      </p>
    </form>
  );
};

export default ResetPassword;
