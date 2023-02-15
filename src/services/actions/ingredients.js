import api from "../../utils/api";
import {  hidePreloader, showPreloader } from "./preloader";

export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SET_CURRENT_INGREDIENT = "SET_DETAIL_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const getIngredients = () => (dispatch) => {
  dispatch(showPreloader());
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
      dispatch(hidePreloader());
    });
};

export const setIngredient = (data) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data,
  };
};

export const setCurrentIngredient = (ingredient) => {
  return {
    type: SET_CURRENT_INGREDIENT,
    ingredient,
  };
};
