import {
  CLEAR_CURRENT_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,

  SET_CURRENT_INGREDIENT,
  UPDATE_TYPE,
  INCREASE_INGREDIENT_COUNT,
  DECREASE_INGREDIENT_COUNT,
  DELETE_ORDER_INGREDIENT,
  ADD_ORDER_BUN,
  DECREASE_BUN_COUNT,
  INCREASE_BUN_COUNT,
  MOVE_ORDER_INGREDIENT,
} from "../actions/ingredients";

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  burgerIngredients: [],
  currentIngredient: {},
  orderIngredients: [],
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
      return { ...state, currentIngredient: {} };
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

    case DELETE_ORDER_INGREDIENT: {
      return {
        ...state,
        orderIngredients: state.orderIngredients.filter(
          (value) => value.id !== action.id,
        ),
      };
    }

    case UPDATE_TYPE: {
      return {
        ...state,
        orderIngredients: [
          ...state.orderIngredients,
          ...state.ingredients
            .filter((value) => value._id === action._id)
            .map((ingredient) => ({
              ...ingredient,
              id: Math.floor(Math.random() * 100000) + 1,
              board: "ingredients",
            })),
        ],
      };
    }
    case ADD_ORDER_BUN: {
      return {
        ...state,
        bun: {
          ...state.ingredients.find((value) => value._id === action._id),
          board: "bun",
        },
      };
    }

    case INCREASE_BUN_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: 2,
              }
            : ingredient,
        ),
      };
    }

    case DECREASE_BUN_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id !== action._id && ingredient.type === "bun"
            ? {
                ...ingredient,
                count: 0,
              }
            : ingredient,
        ),
      };
    }
    case MOVE_ORDER_INGREDIENT: {
      const cloneOrderIngredients = [...state.orderIngredients];
      const swap = (arr, a, b) => {
        arr[a] = arr.splice(b, 1, arr[a])[0];
      };
      swap(cloneOrderIngredients, action.dragIndex, action.hoverIndex);
      return {
        ...state,
        orderIngredients: cloneOrderIngredients,
      };
    }

    //
    default: {
      return state;
    }
  }
};
