import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classes from "./app-header.module.css";
import AppHeaderItem from "../UI/app-header-item/app-header-item";

const AppHeader = () => {
  const active = true;
  return (
    <header className={`${classes.appHeader} pt-4`}>
      <nav className={classes.nav}>
        <div className={classes.nav_left}>
          <AppHeaderItem active={active} text="Конструктор">
            <BurgerIcon type={active && "primary"} />
          </AppHeaderItem>
          <AppHeaderItem text="Лента заказов">
            <ListIcon type="secondary" />
          </AppHeaderItem>
        </div>
        <div className={classes.nav_right}>
          <AppHeaderItem text="Личный кабинет">
            <ProfileIcon type="secondary" />
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
