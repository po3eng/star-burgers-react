import {
  CLEAR_CURRENT_INGREDIENT,
  CLEAR_ORDER,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  SET_CURRENT_INGREDIENT,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  burgerIngredients: [],
  currentIngredient: {},
  order: { number: "00000" },
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
      return { ...state, currentIngredient: {} };
    }

    case GET_ORDER_REQUEST: {
        return {
          ...state,
          orderRequest: true,
        };
      }

      case GET_ORDER_SUCCESS: {
        return {
          ...state,
          orderFailed: false,
          order: action.order,
          orderRequest: false,
        };
      }

      case GET_ORDER_FAILED: {
        return { ...state, orderFailed: true, orderRequest: false };
      }
      case CLEAR_ORDER: {
        return { ...state, order:{}};
      }

    default: {
      return state;
    }
  }
};
