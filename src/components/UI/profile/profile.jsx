import { useState, useEffect } from "react";
import classes from "./profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../../services/actions/auth";

const Profile = () => {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.email && user.name) {
      setForm({ ...user, password: "" });
    }
  }, [user]);

  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const [isActions, setIsActions] = useState(false);

  const onChangeEmail = (e) => {
    setIsActions(true);
    setForm({ ...form, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setIsActions(true);
    setForm({ ...form, password: e.target.value });
  };

  const onChangeName = (e) => {
    setIsActions(true);

    setForm({ ...form, name: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserData(form));
    setIsActions(false);
  };
  const onAbort = (e) => {
    e.preventDefault();
    setForm({ ...user, password: "" });
    setIsActions(false);
  };

  return (
    <form onSubmit={onSubmit} className={classes.wraper}>
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

      {isActions && (
        <div className={classes.actions}>
          <Button
            htmlType="button"
            type="secondary"
            onClick={onAbort}
            size="medium"
          >
            Отмена
          </Button>
          <Button  type="primary" size="medium">
            Соханить
          </Button>
        </div>
      )}
    </form>
  );
};

export default Profile;
