import api from "../../utils/api";
import { clearConstructor } from "./constructor";
import { showPreloader, hidePreloader } from "./preloader";
import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
export const SET_ORDER_REQUEST = "SET_ORDER_REQUEST";
export const SET_ORDER_SUCCES = "SET_ORDER_SUCCES";
export const SET_ORDER_FAILURE = "SET_ORDER_FAILURE";

export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const setOrderNumber = (order: number) => {
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

export const setOrder =
  (orderIngredients: Array<TIngredient>) => (dispatch: any) => {
    dispatch(showPreloader());
    dispatch({ type: SET_ORDER_REQUEST });
    api
      .setOrder(orderIngredients.map((item) => item._id))
      .then((res) => {
        if (res && res.success) {
          dispatch(setOrderNumber(res.order.number));
        }
        return res;
      })
      .then(() => dispatch(clearConstructor()))
      .catch(() => dispatch({ type: SET_ORDER_FAILURE }))
      .finally(() => dispatch(hidePreloader()));
  };
