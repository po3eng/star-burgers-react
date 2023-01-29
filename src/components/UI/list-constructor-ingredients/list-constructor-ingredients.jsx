import { useDispatch, useSelector } from "react-redux";
import Ingredient from "../constructor-ingredient/constructor-ingredient";
import classes from "./list-constructor-ingredients.module.css";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import {
  UPDATE_TYPE,
  INCREASE_INGREDIENT_COUNT,
} from "../../../services/actions/ingredients";
const ListConstructorIngredients = ({ board }) => {
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
        board,
      });
      dispatch({ type: INCREASE_INGREDIENT_COUNT, ...itemId });
    },
  });

  
  return (
    <div ref={drop} className={`${classes.scrollWraper} custom-scroll`}>
      {orderIngredients.length > 0 &&
        orderIngredients
          .filter((i) => i.board === board)
          .map((ingredient, idx) => (
            <Ingredient drag ingredient={ingredient} key={ingredient.id} />
          ))}
    </div>
  );
};
ListConstructorIngredients.propTypes = {
  ingredient: PropTypes.array,
};
export default ListConstructorIngredients;
