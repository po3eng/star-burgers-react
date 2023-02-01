import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Price from "../price/price";
import classes from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const BurgerIngredient = ({ ingredient, onClick, count }) => {
  const [{ isDrag }, drag] = useDrag({
    type: ingredient.type,
    item: { ...ingredient },
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
        {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
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
BurgerIngredient.defaultProps = {
  count: 0,
};
BurgerIngredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number,
};

export default BurgerIngredient;
