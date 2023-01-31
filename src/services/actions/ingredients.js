import api from "../../utils/api";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SET_CURRENT_INGREDIENT = "SET_DETAIL_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const INCREASE_INGREDIENT_COUNT = "INCREASE_INGREDIENT_COUNT";
export const DECREASE_INGREDIENT_COUNT = "DECREASE_INGREDIENT_COUNT";
export const DECREASE_ALL_INGREDIENTS_COUNT = "DECREASE_ALL_INGREDIENTS_COUNT";

export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_BUN = "DELETE_CONSTRUCTOR_BUN";
export const MOVE_CONSTRUCTOR_INGREDIENT = "MOVE_CONSTRUCTOR_INGREDIENT";
export const ADD_CONSTRUCTOR_BUN = "ADD_CONSTRUCTOR_BUN";

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER,
  });
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });
  api
    .getIngredients()
    .then((res) => {
      if (res && res.success) {
        dispatch(setIngredient(res.data));
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};

export const setIngredient = (data) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data,
  };
};
export const addBunToConstructor = (ingredient) => {
  return {
    type: ADD_CONSTRUCTOR_BUN,
    _id: ingredient._id,
    count: 2,
  };
};

export const addIngredient = (ingredient) => {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    count: ingredient.count ? ingredient.count + 1 : 1,
    id: Math.floor(Math.random() * 100000) + 1,
    _id: ingredient._id,
  };
};

export const deleteIngredient = (ingredient) => {
  return {
    type: DELETE_CONSTRUCTOR_INGREDIENT,
    _id: ingredient._id,
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
