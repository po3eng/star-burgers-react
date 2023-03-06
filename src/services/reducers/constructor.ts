import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_BUN,
  MOVE_CONSTRUCTOR_INGREDIENT,
  CLEAR_CONSTRUCTOR,
} from "../actions/constructor";



type TState = {
  constructorIngredients: Array<TIngredient>;
  bun: TIngredient | null;
};
const initialState: TState = {
  constructorIngredients: [],
  bun: null,
};


export const constructorReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: state.constructorIngredients.filter(
          (value: TIngredient) => value.id !== action.id,
        ),
      };
    }

    case ADD_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.ingredient,
        ],
      };
    }

    case ADD_CONSTRUCTOR_BUN: {
      return {
        ...state,
        bun: action.ingredient,
      };
    }

    case MOVE_CONSTRUCTOR_INGREDIENT: {
      const cloneOrderIngredients: Array<TIngredient> = [
        ...state.constructorIngredients,
      ];
      const swap = <T>(arr: Array<T>, a: number, b: number) => {
        arr[a] = arr.splice(b, 1, arr[a])[0];
      };
      swap(cloneOrderIngredients, action.dragIndex, action.hoverIndex);
      return {
        ...state,
        constructorIngredients: cloneOrderIngredients,
      };
    }

    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        constructorIngredients: [],
        bun: null,
      };
    }

    default: {
      return state;
    }
  }
};
