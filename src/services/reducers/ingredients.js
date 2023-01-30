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
  order: { number: "00000" },
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
      return { ...state, order: {} };
    }

    case INCREASE_INGREDIENT_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action._id
            ? {
                ...ingredient,
                count: ingredient.count ? ingredient.count + 1 : 1,
              }
            : ingredient,
        ),
      };
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
