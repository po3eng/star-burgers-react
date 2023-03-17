import api from "../../utils/api";
import { clearConstructor } from "./constructor";
import { showPreloader, hidePreloader } from "./preloader";
import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import { AppDispatch, AppThunk } from "../..";

import { SET_ORDER_REQUEST, SET_ORDER_FAILURE, CLEAR_ORDER, SET_ORDER_SUCCES } from "../constants/orders";

export interface ISetOrderSuccess {
  readonly type: typeof SET_ORDER_SUCCES;
  readonly order: number;
}
export interface ISetOrderRequest {
  readonly type: typeof SET_ORDER_REQUEST;
}
export interface ISetOrderFailure {
  readonly type: typeof SET_ORDER_FAILURE;
}
export interface IClearOrderNumber {
  readonly type: typeof CLEAR_ORDER;
  readonly order: number | null;
}

export type TOrederActions = ISetOrderSuccess | ISetOrderRequest | ISetOrderFailure | IClearOrderNumber;

export const setOrderSuccess = (order: number): ISetOrderSuccess => ({ type: SET_ORDER_SUCCES, order: order });
export const setOrderRequest = (): ISetOrderRequest => ({ type: SET_ORDER_REQUEST });
export const setOrderFailure = (): ISetOrderFailure => ({ type: SET_ORDER_FAILURE });
export const clearOrderNumber = (): IClearOrderNumber => ({ type: CLEAR_ORDER, order: null });

export const setOrderThunk: AppThunk = (orderIngredients: Array<TIngredient>) => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(setOrderRequest());
  api
    .setOrder(orderIngredients.map(item => item._id))
    .then(res => {
      if (res && res.success) {
        dispatch(setOrderSuccess(res.order.number));
      }
      return res;
    })
    .then(() => dispatch(clearConstructor()))
    .catch(() => dispatch(setOrderFailure()))
    .finally(() => dispatch(hidePreloader()));
};
export { CLEAR_ORDER };
