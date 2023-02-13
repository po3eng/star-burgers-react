import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/actions/auth";
import classes from "./forgot-password.module.css";
import useForm from "../../hooks/useForm";

const ForgotPassword = () => {
  const [form, onChangeForm] = useForm({ email: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(forgotPassword(form));
    res.then((data) => {
      data &&
        data.success &&
        navigate("/reset-password", { state: { isForgot: true } });
    });
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
      <Button type="primary" size="medium">
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
