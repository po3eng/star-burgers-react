import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/UI/ingredient-details/ingredient-details";
import classes from "./ingredients.module.css";
const IngredientPage = () => {
  const { id } = useParams();
  const { ingredients } = useSelector((store) => store.ingredients);
  const [ingredient, setIngredient] = useState({ name: "" });

  useEffect(() => {
    if (ingredients.length) {
      setIngredient(ingredients.find((item) => item._id === id));
    }
  }, [ingredients]);
  return (
    <div className={classes.container}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  );
};
export default IngredientPage;
