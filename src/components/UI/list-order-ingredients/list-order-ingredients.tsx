import { FC, useMemo } from "react";
import { useAppSelector } from "../../../hooks/redux";
import classes from "./list-order-ingredients.module.css";
import Price from "../price/price";
type TListOrderIngredientsProps = {
  orderIngredients: string[];
};
const ListOrderIngredients: FC<TListOrderIngredientsProps> = ({ orderIngredients }) => {
  const VISIBLE_INGREDIENTS = 6;
  const ingredients = useAppSelector(store => store.ingredients.ingredients);
  const selectedIngredients = ingredients.filter(item_a => orderIngredients.some(item_b => item_a._id === item_b));

  const countLast = selectedIngredients.length - VISIBLE_INGREDIENTS;
  const totalPrice = useMemo(() => {
    return selectedIngredients.reduce((accumulator, item) => {
      if (!item) {
        return accumulator;
      }
      return accumulator + item.price;
    }, 0);
  }, [selectedIngredients]);
  return (
    <div className={classes.container}>
      <div className={classes.ingredients_container}>
        {selectedIngredients.map(
          (ingredient, idx) =>
            idx < VISIBLE_INGREDIENTS && (
              <div key={ingredient._id} className={classes.item}>
                <img src={ingredient.image_mobile} />
              </div>
            ),
        )}
        {countLast > 0 && (
          <div className={classes.counter}>
            <p className="text text_type_digits-default pl-4">+{countLast}</p>
          </div>
        )}
      </div>
      <Price price={totalPrice} size="default" />
    </div>
  );
};

export default ListOrderIngredients;
