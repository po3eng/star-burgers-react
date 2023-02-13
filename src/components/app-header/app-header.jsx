import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./app-header.module.css";
import HeaderItem from "../UI/app-header-item/app-header-item";
import { Link } from "react-router-dom";
const AppHeader = () => {
  return (
    <header className={`${classes.appHeader} pt-4`}>
      <nav className={classes.nav}>
        <div className={classes.nav_left}>
          <HeaderItem
            to="/"
            Element={BurgerIcon}
            text="Конструктор"
          ></HeaderItem>
          <HeaderItem
            to="/order-feed"
            Element={ListIcon}
            text="Лента заказов"
          ></HeaderItem>
        </div>
        <div className={classes.nav_right}>
          <HeaderItem
            to="/profile"
            Element={ProfileIcon}
            text="Личный кабинет"
          ></HeaderItem>
        </div>
      </nav>
      <div className={classes.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
