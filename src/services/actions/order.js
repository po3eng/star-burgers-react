import api from "../../utils/api";
import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const SET_ORDER = "SET_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const setOrder = (orderIngredients) => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER,
  });
  api
    .setOrder(orderIngredients)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: SET_ORDER,
          order: res.order,
        });
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
