import classes from "./ingredient-details.module.css";
import ListNutrients from "../list-nutrients/list-nutrients";
import { FC } from "react";

export type TIngredient = {
  _id: string;
  id?: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

type TIngredientDetailsProps = {
  ingredient?: TIngredient;
};

const IngredientDetails: FC<TIngredientDetailsProps> = ({ ingredient }) => {
  return (
    <div className={classes.content}>
      <img
        className={classes.image}
        src={ingredient?.image}
        alt={ingredient?.name}
      />
      <p className="text text_type_main-medium pt-4">{ingredient?.name}</p>
      <ListNutrients ingredient={ingredient}></ListNutrients>
    </div>
  );
};
export default IngredientDetails;
