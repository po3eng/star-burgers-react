import { useState, useEffect } from "react";
import classes from "./profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.auth.user);

  useEffect(() => {
    if (user && user.email && user.name) {
      setForm({ ...user, password: "" });
    }
  }, [user]);

  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  return (
    <div className={classes.wraper}>
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
    </div>
  );
};

export default Profile;
