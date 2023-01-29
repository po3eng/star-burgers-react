import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import classes from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const BurgerIngredient = ({ ingredient, onClick }) => {
  const { _id, id } = ingredient;
  const [{ isDrag }, drag] = useDrag({
    type: ingredient.type,
    item: { _id, id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={classes.wrap}
      onClick={() => {
        onClick(ingredient);
      }}
    >
      <div className={`${classes.counterWraper} row`}>
        {ingredient.count > 0 && (
          <Counter count={ingredient.count} size="default" extraClass="m-1" />
        )}
        <img
          className={classes.image}
          src={ingredient.image}
          alt={ingredient.name}
        />
      </div>
      <div className="row p-1">
        <Price size="default" price={ingredient.price} />
      </div>
      <div className={classes.name}>
        <p className={`${classes.caption} text text_type_main-small`}>
          {ingredient.name}
        </p>
      </div>
    </div>
  );
};

BurgerIngredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BurgerIngredient;
