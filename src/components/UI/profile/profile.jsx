import { useState, useRef } from "react";
import {
  EmailInput,
  PasswordInput,
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
const Profile = () => {
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
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
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
    </div>
  );
};

export default Profile;
