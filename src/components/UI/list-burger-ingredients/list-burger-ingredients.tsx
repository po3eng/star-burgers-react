import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import classes from "./list-burger-ingredients.module.css";
import { FC, useMemo } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { TIngredient } from "../ingredient-details/ingredient-details";

export type TListBurgerIngredients = {
  type: string;
  ingredients: TIngredient[];
  title: string;
  onClick: (item: TIngredient) => void;
};

const ListBurgerIngredients: FC<TListBurgerIngredients> = ({ type, ingredients, title, onClick }) => {
  const constructor = useAppSelector(store => store.constr);
  const ingredientCounters = useMemo(() => {
    const { constructorIngredients, bun } = constructor;

    const countersSet: { [x: string]: number } = {};
    constructorIngredients.forEach(ingredient => {
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
        {ingredients.map(item => (
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

export default ListBurgerIngredients;
