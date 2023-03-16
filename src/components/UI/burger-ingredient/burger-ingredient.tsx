import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import classes from "./burger-ingredient.module.css";
import { useDrag } from "react-dnd";
import { TIngredient } from "../ingredient-details/ingredient-details";
import { FC } from "react";

type BurgerIngredientProps = {
  ingredient: TIngredient;
  onClick: (ingredient: TIngredient) => void;
  count: number;
};

const BurgerIngredient: FC<BurgerIngredientProps> = ({ ingredient, onClick, count }) => {
  const [{}, drag] = useDrag({
    type: ingredient.type,
    item: { ...ingredient },
    collect: monitor => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={classes.wrap}
      onClick={() => {
        onClick(ingredient);
      }}>
      <div className={`${classes.counterWraper} row`}>
        {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
        <img className={classes.image} src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className="row p-1">
        <Price size="default" price={ingredient.price} />
      </div>
      <div className={classes.name}>
        <p className={`${classes.caption} text text_type_main-small`}>{ingredient.name}</p>
      </div>
    </div>
  );
};
BurgerIngredient.defaultProps = {
  count: 0,
};
export default BurgerIngredient;
