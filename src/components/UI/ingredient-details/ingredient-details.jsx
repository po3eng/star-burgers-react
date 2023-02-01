import classes from "./ingredient-details.module.css";
import ListNutrients from "../list-nutrients/list-nutrients";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const ingredient = useSelector((store) => store.ingredients.currentIngredient);
  return (
    <div className={classes.content}>
      <img
        className={classes.image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <p className="text text_type_main-medium pt-4">{ingredient.name}</p>
      <ListNutrients ingredient={ingredient}></ListNutrients>
    </div>
  );
};
export default IngredientDetails;
