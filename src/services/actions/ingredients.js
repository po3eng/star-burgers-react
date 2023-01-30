import api from "../../utils/api";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SET_CURRENT_INGREDIENT = "SET_DETAIL_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const UPDATE_TYPE = "UPDATE_TYPE";
export const INCREASE_INGREDIENT_COUNT = "INCREASE_INGREDIENT_COUNT";
export const DECREASE_INGREDIENT_COUNT = "DECREASE_INGREDIENT_COUNT";

export const DELETE_ORDER_INGREDIENT = "DELETE_ORDER_INGREDIENT";
export const MOVE_ORDER_INGREDIENT = "MOVE_ORDER_INGREDIENT";

export const ADD_ORDER_BUN = "ADD_ORDER_BUN";

export const INCREASE_BUN_COUNT = "INCREASE_BUN_COUNT";
export const DECREASE_BUN_COUNT = "DECREASE_BUN_COUNT";

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER,
  });
  api
    .getIngredients()
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data,
        });
      } else {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      }
    })
    .catch((e) => console.err(e))
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};

export const deleteOrderIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: DECREASE_INGREDIENT_COUNT,
    _id: ingredient._id,
  });
  dispatch({
    type: DELETE_ORDER_INGREDIENT,
    id: ingredient.id,
  });
};
export const addBunToOrder = (ingredient) => (dispatch) => {
  dispatch({
    type: ADD_ORDER_BUN,
    _id: ingredient._id,
  });
  dispatch({
    type: INCREASE_BUN_COUNT,
    _id: ingredient._id,
  });
  dispatch({
    type: DECREASE_BUN_COUNT,
    _id: ingredient._id,
  });
};
