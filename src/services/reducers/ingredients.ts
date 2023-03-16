import {
  GET_INGREDIENTS_SUCCESS,
  CLEAR_CURRENT_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  SET_CURRENT_INGREDIENT,
} from "../constants/ingredients";

import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import { TIngredientActions } from "../actions/ingredients";

type TIngredientsState = {
  ingredients: Array<TIngredient>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredientsSuccess: boolean;
  currentIngredient: TIngredient | null;
};

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsSuccess: false,
  currentIngredient: null,
};

export const ingredientsReducer = (state = initialState, action: TIngredientActions): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredientsRequest: true,
        ingredientsSuccess: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsSuccess: true,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
        ingredientsSuccess: false,
      };
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
