import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import calsses from "./register.module.css";
import { registerUser } from "../../services/actions/auth";
import useForm from "../../hooks/useForm.js";
import { useAppDispatch } from "../../hooks/redux";
import { FC, SyntheticEvent } from "react";

const Register :FC = () => {
  const [form, handleChangeForm] = useForm({
    email: "",
    name: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (e: SyntheticEvent) => {
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
          onChange={handleChangeForm}
          value={form.name}
          name={"name"}
          size={"default"}
          extraClass="mb-2"
        />
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
