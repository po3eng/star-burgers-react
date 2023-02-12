import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import calsses from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../services/actions/auth";

const Register = () => {
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const user = useSelector((store) => store.auth.user);

  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className={calsses.container}>
      <p className="text text_type_main-medium">Регистрация</p>
      <form onSubmit={onSubmit} className={calsses.container}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={form.name}
          name={"name"}
          size={"default"}
          extraClass="mb-2"
        />
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
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-small text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link className="pl-2" to="/login" style={{ color: "#4C4CFF" }}>
          Войти
        </Link>
      </p>
    </div>
  );
};

export default Register;
