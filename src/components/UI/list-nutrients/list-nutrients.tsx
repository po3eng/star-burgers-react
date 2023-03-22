import { FC } from "react";
import Nutrient from "../nutrient/nutrient";
import styles from "./list-nutrients.module.css";
import { TIngredient } from "../ingredient-details/ingredient-details";

type TListNutrientsProps = {
  ingredient: TIngredient;
};
const ListNutrients: FC<TListNutrientsProps> = ({ ingredient }) => {
  return (
    <div className={styles.nutrients}>
      <Nutrient nameNutrient="Калории,ккал" valueNutrient={ingredient.calories}></Nutrient>
      <Nutrient nameNutrient=" Белки, г" valueNutrient={ingredient.proteins}></Nutrient>
      <Nutrient nameNutrient="Жиры, г" valueNutrient={ingredient.fat}></Nutrient>
      <Nutrient nameNutrient="Углеводы, г" valueNutrient={ingredient.carbohydrates}></Nutrient>
    </div>
  );
};

export default ListNutrients;
