import api from "../../utils/api";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const SET_ORDER_REQUEST = "SET_ORDER_REQUEST";
export const SET_ORDER_SUCCES = "SET_ORDER_SUCCES";
export const SET_ORDER_FAILURE = "SET_ORDER_FAILURE";

export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const setOrderNumber = (order) => {
  return {
    type: SET_ORDER_SUCCES,
    order: order,
  };
};

export const clearOrderNumber = () => {
  return {
    type: CLEAR_ORDER,
    order: null,
  };
};

export const setOrder = (orderIngredients) => (dispatch) => {
  orderIngredients = orderIngredients.map((item) => item._id);
  dispatch({ type: SHOW_PRELOADER });
  dispatch({ type: SET_ORDER_REQUEST });
  api
    .setOrder(orderIngredients)
    .then((res) => {
      if (res && res.success) {
        dispatch(setOrderNumber(res.order.number));
      } else {
        dispatch({ type: SET_ORDER_FAILURE });
      }
    })
    .catch((e) => {
      dispatch({ type: SET_ORDER_FAILURE });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};
