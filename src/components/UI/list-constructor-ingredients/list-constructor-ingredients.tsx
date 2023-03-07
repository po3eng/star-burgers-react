import Ingredient from "../constructor-ingredient/constructor-ingredient";
import classes from "./list-constructor-ingredients.module.css";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { addIngredient } from "../../../services/actions/constructor";

import EmptyIngredient from "../empty-ingedient/empty-ingredient";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { TIngredient } from "../ingredient-details/ingredient-details";
const ListConstructorIngredients: FC = () => {
  const dispatch = useAppDispatch();
  const constructorIngredients = useAppSelector(
    (store) => store.constr.constructorIngredients,
  );

  const [isHover, drop] = useDrop({
    accept: ["main", "sauce"],
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient as TIngredient));
    },
  });

  return (
    <div ref={drop} className={`${classes.scrollWraper} custom-scroll`}>
      {constructorIngredients.length > 0 ? (
        constructorIngredients.map((ingredient, idx) => (
          <Ingredient
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
