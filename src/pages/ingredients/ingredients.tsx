import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IngredientDetails, {
  TIngredient,
} from "../../components/UI/ingredient-details/ingredient-details";
import classes from "./ingredients.module.css";
import { useAppSelector } from "../../hooks/redux";
const IngredientPage: FC = () => {
  const { id } = useParams();
  const { ingredients } = useAppSelector((store) => store.ingredients);
  const [ingredient, setIngredient] = useState<TIngredient | undefined>();

  useEffect(() => {
    if (ingredients.length) {
      setIngredient(ingredients.find((item: TIngredient) => item._id === id));
    }
  }, [ingredients]);
  return (
    <div className={classes.container}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  );
};
export default IngredientPage;
