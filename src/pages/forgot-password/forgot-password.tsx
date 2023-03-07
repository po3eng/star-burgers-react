import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/actions/auth";
import classes from "./forgot-password.module.css";
import useForm from "../../hooks/useForm";
import { SyntheticEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const ForgotPassword = () => {
  const [form, onChangeForm] = useForm({ email: "" });
  const dispatch = useAppDispatch();
  const forgetSuccess = useAppSelector((store) => store.auth.forgotSuccess);
  const navigate = useNavigate();
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword(form));
    if (forgetSuccess) {
      navigate("/reset-password", { state: { isForgot: true } });
    }
  };

  return (
    <form className={classes.container} onSubmit={onSubmit}>
      <p className="text text_type_main-medium">Воcстановление пароля</p>
      <EmailInput
        onChange={onChangeForm}
        placeholder={"E-mail"}
        value={form.email}
        name={"email"}
        extraClass="mb-2"
      />
      <Button htmlType="submit" type="primary" size="medium">
        Восcтановить
      </Button>
      <p className="text text_type_main-small text_color_inactive mt-20">
        Вспомнили пароль?
        <Link className={`${classes.link} pl-2`} to="/login">
          Войти
        </Link>
      </p>
    </form>
  );
};

export default ForgotPassword;
