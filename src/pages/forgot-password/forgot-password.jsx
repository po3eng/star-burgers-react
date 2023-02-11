import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/actions/auth";
import { getCookie } from "../../utils/cookies";
const ForgotPassword = () => {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    dispatch(forgotPassword({ email }));
  };

  const isForgot = useSelector((store) => store.auth.isForgot);

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
      <p className="text text_type_main-medium">Воcстановление пароля</p>
      <EmailInput
        onChange={onChangeEmail}
        placeholder={"E-mail"}
        value={email}
        name={"email"}
        extraClass="mb-2"
      />
      <Button onClick={onSubmit} htmlType="button" type="primary" size="medium">
        Восcтановить
      </Button>
      <p className="text text_type_main-small text_color_inactive mt-20">
        Вспомнили пароль?
        <Link className="pl-2" to="/login" style={{ color: "#4C4CFF" }}>
          Войти
        </Link>
      </p>
      {isForgot && <Navigate to="/reset-password" replace={true} />}
    </div>
  );
};

export default ForgotPassword;
