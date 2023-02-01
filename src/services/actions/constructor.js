export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const MOVE_CONSTRUCTOR_INGREDIENT = "MOVE_CONSTRUCTOR_INGREDIENT";
export const ADD_CONSTRUCTOR_BUN = "ADD_CONSTRUCTOR_BUN";

export const addBunToConstructor = (ingredient) => {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    ingredient,
  };
};

export const addIngredient = (ingredient) => {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient: { ...ingredient, id: Math.floor(Math.random() * 100000) + 1 },
  };
};
export const deleteIngredient = (ingredient) => {
  return {
    type: DELETE_CONSTRUCTOR_INGREDIENT,
    id: ingredient.id,
  };
};

export const moveConstructorIngredient = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_CONSTRUCTOR_INGREDIENT,
    dragIndex,
    hoverIndex,
  };
};
