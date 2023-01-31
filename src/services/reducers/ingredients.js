import {
  CLEAR_CURRENT_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  DECREASE_INGREDIENT_COUNT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_BUN,
  MOVE_CONSTRUCTOR_INGREDIENT,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentIngredient: null,
  constructorIngredients: [],
  bun: { price: 0 },
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.ingredients,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }
    case SET_CURRENT_INGREDIENT: {
      return { ...state, currentIngredient: action.ingredient };
    }
    case CLEAR_CURRENT_INGREDIENT: {
      return { ...state, currentIngredient: null };
    }

    case DECREASE_INGREDIENT_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: ingredient.count ? ingredient.count - 1 : 0,
              }
            : ingredient,
        ),
      };
    }

    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: ingredient.count ? ingredient.count - 1 : 0,
              }
            : ingredient,
        ),
        constructorIngredients: state.constructorIngredients.filter(
          (value) => value.id !== action.id,
        ),
      };
    }

    case ADD_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: action.count,
              }
            : ingredient,
        ),
        constructorIngredients: [
          ...state.constructorIngredients,
          ...state.ingredients
            .filter((value) => value._id === action._id)
            .map((ingredient) => ({
              ...ingredient,
              id: action.id,
            })),
        ],
      };
    }

    case ADD_CONSTRUCTOR_BUN: {
      return {
        ...state,
        bun: {
          ...state.ingredients.find((value) => value._id === action._id),
        },
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: action.count,
              }
            : { ...ingredient, count: 0, board: null },
        ),
      };
    }

    case MOVE_CONSTRUCTOR_INGREDIENT: {
      const cloneOrderIngredients = [...state.constructorIngredients];
      const swap = (arr, a, b) => {
        arr[a] = arr.splice(b, 1, arr[a])[0];
      };
      swap(cloneOrderIngredients, action.dragIndex, action.hoverIndex);
      return {
        ...state,
        constructorIngredients: cloneOrderIngredients,
      };
    }

    //
    default: {
      return state;
    }
  }
};
