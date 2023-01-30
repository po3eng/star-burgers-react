import { useDispatch, useSelector } from "react-redux";
import Ingredient from "../constructor-ingredient/constructor-ingredient";
import classes from "./list-constructor-ingredients.module.css";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import {
  UPDATE_TYPE,
  INCREASE_INGREDIENT_COUNT,
} from "../../../services/actions/ingredients";

import EmptyIngredient from "../empty-ingedient/empty-ingredient";
const ListConstructorIngredients = () => {
  const dispatch = useDispatch();
  const orderIngredients = useSelector(
    (store) => store.ingredients.orderIngredients,
  );

  const [{ isHover }, drop] = useDrop({
    accept: ["main", "sauce"],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(itemId) {
      dispatch({
        type: UPDATE_TYPE,
        ...itemId,
      });
      dispatch({ type: INCREASE_INGREDIENT_COUNT, ...itemId });
    },
  });

  return (
    <div ref={drop} className={`${classes.scrollWraper} custom-scroll`}>
      {orderIngredients.length > 0 ? (
        orderIngredients
          .filter((i) => i.board === "ingredients")
          .map((ingredient, idx) => (
            <Ingredient
              drag
              ingredient={ingredient}
              key={ingredient.id}
              index={idx}
            />
          ))
      ) : (
        <EmptyIngredient></EmptyIngredient>
      )}
    </div>
  );
};
ListConstructorIngredients.propTypes = {
  ingredient: PropTypes.array,
};
export default ListConstructorIngredients;
