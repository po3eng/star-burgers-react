import { useSelector } from "react-redux";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import classes from "./list-burger-ingredients.module.css";
import PropTypes from "prop-types";
import { useMemo } from "react";

const ListBurgerIngredients = ({ type, ingredients, title, onClick }) => {
  const constructor = useSelector((store) => store.constr);
  const ingredientCounters = useMemo(() => {
    const { constructorIngredients, bun } = constructor;
    const countersSet = {};
    constructorIngredients.forEach((ingredient) => {
      if (!countersSet[ingredient._id]) {
        countersSet[ingredient._id] = 0;
      }
      countersSet[ingredient._id]++;
    });
    if (bun) {
      countersSet[bun._id] = 2;
    }
    return countersSet;
  }, [constructor]);
  return (
    <div className="mt-10">
      <p id={type} className="text text_type_main-medium">
        {title}
      </p>
      <div className={` ${classes.wraper} pt-6 ml-4`}>
        {ingredients.map((item) => (
          <BurgerIngredient
            ingredient={item}
            count={ingredientCounters[item._id]}
            key={item._id}
            onClick={() => {
              onClick(item);
            }}
          />
        ))}
      </div>
    </div>
  );
};

ListBurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ListBurgerIngredients;
