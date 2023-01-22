import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./app-header.module.css";
import AppHeaderItem from "../UI/app-header-item/app-header-item";

const AppHeader = () => {
  return (
    <header className={`${classes.appHeader} pt-4`}>
      <nav className={classes.nav}>
        <div className={classes.nav_left}>
          <AppHeaderItem text="Конструктор">
            <BurgerIcon type="primary" />
          </AppHeaderItem>
          <AppHeaderItem text="Лента заказов">
            <ListIcon type="primary" />
          </AppHeaderItem>
        </div>
        <div className={classes.nav_right}>
          <AppHeaderItem text="Личный кабинет">
            <ProfileIcon type="primary" />
          </AppHeaderItem>
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
