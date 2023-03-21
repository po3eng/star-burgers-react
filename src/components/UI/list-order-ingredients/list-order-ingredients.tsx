import { FC, useMemo } from "react";
import classes from "./list-order-ingredients.module.css";
import Price from "../price/price";
import { TIngredient } from "../ingredient-details/ingredient-details";
type TListOrderIngredientsProps = {
  orderIngredients: TIngredient[];
  price?: number;
};

const ListOrderIngredients: FC<TListOrderIngredientsProps> = ({ orderIngredients, price }) => {
  const VISIBLE_INGREDIENTS = 6;
  const COUNT_LAST = orderIngredients.length - VISIBLE_INGREDIENTS;

  return (
    <div className={classes.container}>
      <div className={classes.ingredients_container}>
        {orderIngredients.map(
          (ingredient, idx) =>
            idx < VISIBLE_INGREDIENTS && (
              <div key={ingredient._id} className={classes.item}>
                <img className={classes.img_ingredient} src={ingredient.image_mobile} />
              </div>
            ),
        )}
        {COUNT_LAST > 0 && (
          <div className={classes.counter}>
            <p className="text text_type_digits-default pl-4">+{COUNT_LAST}</p>
          </div>
        )}
      </div>
      <Price price={price || 0} size="default" />
    </div>
  );
};

export default ListOrderIngredients;
