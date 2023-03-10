import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";

export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const MOVE_CONSTRUCTOR_INGREDIENT = "MOVE_CONSTRUCTOR_INGREDIENT";
export const ADD_CONSTRUCTOR_BUN = "ADD_CONSTRUCTOR_BUN";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";

export const addBunToConstructor = (ingredient: TIngredient) => {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    ingredient,
  };
};

export const addIngredient = (ingredient: TIngredient) => {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient: { ...ingredient, id: Math.floor(Math.random() * 100000) + 1 },
  };
};

export const deleteIngredient = (ingredient: TIngredient) => {
  return {
    type: DELETE_CONSTRUCTOR_INGREDIENT,
    id: ingredient.id,
  };
};

export const moveConstructorIngredient = (
  dragIndex: number,
  hoverIndex: number,
) => {
  return {
    type: MOVE_CONSTRUCTOR_INGREDIENT,
    dragIndex,
    hoverIndex,
  };
};

export const clearConstructor = () => ({ type: CLEAR_CONSTRUCTOR });
