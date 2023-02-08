import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./app-header.module.css";
import AppHeaderItem from "../UI/app-header-item/app-header-item";
import {  NavLink } from "react-router-dom";
const AppHeader = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  const active = true;
  return (
    <header className={`${classes.appHeader} pt-4`}>
      <nav className={classes.nav}>
        <div className={classes.nav_left}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <AppHeaderItem active={active} text="Конструктор">
              <BurgerIcon type={active && "primary"} />
            </AppHeaderItem>
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <AppHeaderItem text="Лента заказов">
              <ListIcon type="secondary" />
            </AppHeaderItem>
          </NavLink>
        </div>
        <div className={classes.nav_right}>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <AppHeaderItem text="Личный кабинет">
              <ProfileIcon type="secondary" />
            </AppHeaderItem>
          </NavLink>
        </div>
      </nav>
      <div className={classes.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
