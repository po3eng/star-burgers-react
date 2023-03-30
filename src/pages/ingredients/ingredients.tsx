import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientDetails, { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";

import classes from "./ingredients.module.css";
import { useAppSelector } from "../../hooks/redux";

const IngredientPage: FC = () => {
  const { id } = useParams();
  const ingredients: Array<TIngredient> = useAppSelector(store => store.ingredients.ingredients);
  const [ingredient, setIngredient] = useState<TIngredient>();
  useEffect(() => {
    if (ingredients.length) {
      setIngredient(ingredients.find(item => item._id === id));
    }
  }, [ingredients,id]);
  return (
    <div className={classes.container}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  );
};
export default IngredientPage;
