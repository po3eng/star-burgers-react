import api from "../../utils/api";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";
import {
  DELETE_ALL_CONSTRUCTOR_INGREDIENTS,
  DECREASE_ALL_INGREDIENTS_COUNT,
  DELETE_CONSTRUCTOR_BUN,
} from "./ingredients";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const SET_ORDER = "SET_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const clearConstructor = (order) => (dispatch) => {
  dispatch({
    type: SET_ORDER,
    order: order,
  });
  dispatch({
    type: DECREASE_ALL_INGREDIENTS_COUNT,
  });
  dispatch({
    type: DELETE_ALL_CONSTRUCTOR_INGREDIENTS,
  });
  dispatch({
    type: DELETE_CONSTRUCTOR_BUN,
  });
};

export const setOrder = (orderIngredients) => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER,
  });
  api
    .setOrder(orderIngredients)
    .then((res) => {
      if (res && res.success) {
        dispatch(clearConstructor(res.order));
      } else {
        dispatch({
          type: CLEAR_ORDER,
        });
      }
    })
    .catch((e) => {
      console.err(e);
      dispatch({
        type: CLEAR_ORDER,
      });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};
