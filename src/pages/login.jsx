import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

const Login = () => {
  const [mail, setEmail] = useState("bob@example.com");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("password");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "400px",
        gap:'20px'
      }}
    >
      <p className="text text_type_main-medium">Вход</p>
      <EmailInput
        onChange={onChangeEmail}
        value={mail}
        name={"email"}
        placeholder="Логин"
        extraClass="mb-2"
      />
      <PasswordInput
        onChange={onChangePassword}
        value={password}
        name={"password"}
        extraClass="mb-2"
      />
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
    </div>
  );
};

export default Login;
