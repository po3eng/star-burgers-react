import { useState, useEffect, FC, SyntheticEvent } from "react";
import classes from "./profile.module.css";
import { EmailInput, PasswordInput, Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { TUser, updateUserDataThunk } from "../../../services/actions/auth";
import useForm from "../../../hooks/useForm.js";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const user: TUser | null = useAppSelector(store => store.auth.user);
  const [isActions, setIsActions] = useState(false);
  const [form, handleChangeForm, setForm] = useForm({
    email: "",
    name: "",
    password: "",
  });

  useEffect(() => {
    if (user && user.email && user.name) {
      setForm({ ...user, password: "" });
    }
  }, [user]);

  const handleChange = (e: SyntheticEvent) => {
    setIsActions(true);
    handleChangeForm(e);
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateUserDataThunk(form));
    setIsActions(false);
  };
  const onAbort = (e: SyntheticEvent) => {
    e.preventDefault();
    setForm({ ...user, password: "" });
    setIsActions(false);
  };

  return (
    <form onSubmit={onSubmit} className={classes.wraper}>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={handleChange}
        value={form.name}
        name={"name"}
        size={"default"}
        extraClass="mb-2"
      />
      <EmailInput onChange={handleChange} placeholder={"E-mail"} value={form.email} name={"email"} extraClass="mb-2" />
      <PasswordInput
        onChange={handleChange}
        value={form.password}
        placeholder={"Пароль"}
        name={"password"}
        extraClass="mb-2"
      />

      {isActions && (
        <div className={classes.actions}>
          <Button htmlType="reset" type="secondary" onClick={onAbort} size="medium">
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
};

export default Profile;
