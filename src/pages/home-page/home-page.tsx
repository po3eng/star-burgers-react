import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import classes from "../../components/app/app.module.css";
import { FC } from "react";
const HomePage: FC = () => {
  return (
    <div className={classes.home}>
      <div className={classes.col2}>
        <BurgerIngredients />
      </div>
      <div className={`${classes.col2} pt-25`}>
        <BurgerConstructor />
      </div>
    </div>
  );
};

export default HomePage;
