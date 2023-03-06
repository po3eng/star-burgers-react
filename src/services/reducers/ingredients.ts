import {
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
} from "../actions/ingredients";

import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  currentIngredient: TIngredient | null;
};
const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentIngredient: null,
};

export const ingredientsReducer = (
  state: TIngredientsState = initialState,
  action: any,
) => {
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

    default: {
      return state;
    }
  }
};
