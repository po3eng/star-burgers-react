import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [mail, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [value, setValue] = useState();
  const inputRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        alignSelf: "center",
        flex: "50%",
      }}
    >
      <p className="text text_type_main-medium">Регистрация</p>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name={"name"}
        ref={inputRef}
        size={"default"}
        extraClass="mb-2"
      />
      <EmailInput
        onChange={onChangeEmail}
        placeholder={"E-mail"}
        value={mail}
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
      <Button htmlType="button" type="primary" size="medium">
        Зарегистрироваться
      </Button>
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
