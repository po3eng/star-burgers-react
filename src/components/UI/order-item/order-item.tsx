import { FC } from "react";
import { TIngredient } from "../ingredient-details/ingredient-details";
import classes from "./order-item.module.css";
import Price from "../price/price";

type TOrderItemProps = {
  ingredient: TIngredient;
  count: number;
};

const OrderItem: FC<TOrderItemProps> = ({ ingredient, count }) => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <img className={classes.img_ingredient} src={ingredient.image_mobile} />
      </div>
      <div className={classes.name}>
        <p className="text text_type_main-default pl-4">{ingredient.name}</p>
      </div>
      <div className={classes.price}>
        <p className="text text_type_digits-default pr-2">{count} x</p>
        <Price price={ingredient.price} size="default" />
      </div>
    </div>
  );
};

export default OrderItem;
