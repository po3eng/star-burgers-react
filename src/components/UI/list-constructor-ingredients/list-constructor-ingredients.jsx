import { useDispatch, useSelector } from "react-redux";
import Ingredient from "../constructor-ingredient/constructor-ingredient";
import classes from "./list-constructor-ingredients.module.css";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../../services/actions/constructor";

import EmptyIngredient from "../empty-ingedient/empty-ingredient";
const ListConstructorIngredients = () => {
  const dispatch = useDispatch();
  const constructorIngredients = useSelector(
    (store) => store.constr.constructorIngredients,
  );

  const [{  }, drop] = useDrop({
    accept: ["main", "sauce"],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient));
    },
  });

  return (
    <div ref={drop} className={`${classes.scrollWraper} custom-scroll`}>
      {constructorIngredients.length > 0 ? (
        constructorIngredients.map((ingredient, idx) => (
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
