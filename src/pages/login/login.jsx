import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { signIn } from "../../services/actions/auth";
const Login = () => {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user]);



  // TODO: отверстать форму! с онсабмитом
  // изменить стайт на стэйт форм
  
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
        <Link className="pl-2" style={{ color: "#4C4CFF" }} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-small primary text_color_inactive">
        Забыли пароль?
        <Link
          className="pl-2 link"
          style={{ color: "#4C4CFF" }}
          to="/forgot-password"
        >
          Востановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
