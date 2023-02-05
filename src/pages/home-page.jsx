
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import classes from "../components/app/app.module.css";
const HomePage = () => {
  return (
    <>
      <div className={classes.col2}>
        <BurgerIngredients />
      </div>
      <div className={`${classes.col2} pt-25`}>
        <BurgerConstructor />
      </div>
    </>
  );
};

export default HomePage;
