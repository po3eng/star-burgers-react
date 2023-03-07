import {
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./reset-password.module.css";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { resetPassword } from "../../services/actions/auth";
import useForm from "../../hooks/useForm";
import { FC, SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const ResetPassword: FC = () => {
  const [form, onChangeHandle] = useForm({ token: "", password: "" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const resetSuccces = useAppSelector((store) => store.auth.resetSuccess);
  
  const isForgot = location.state?.isForgot;
  if (!isForgot) {
    return <Navigate to="/" replace />;
  }
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(resetPassword(form));
    if (resetSuccces) {
      navigate("/login", { replace: true });
    }
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
        name={"token"}
        size={"default"}
        extraClass="ml-1"
      />
      <Button htmlType="submit" type="primary" size="medium">
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
