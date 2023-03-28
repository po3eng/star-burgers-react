import api from "../../utils/api";
import { clearConstructor } from "./constructor";
import { showPreloader, hidePreloader } from "./preloader";
import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import { AppDispatch, AppThunk } from "../..";
import { TOrder } from "../../components/UI/feed-item/feed-item";

import {
  SET_ORDER_REQUEST,
  SET_ORDER_FAILURE,
  CLEAR_ORDER,
  SET_ORDER_SUCCES,
  SET_CURRENT_ORDER,
  CLEAR_CURRENT_ORDER,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCES,
} from "../constants/orders";
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

export interface ISetCurrentOrder {
  readonly type: typeof SET_CURRENT_ORDER;
  readonly currentOrder: TOrder;
}
export interface IClearCurrentOrder {
  readonly type: typeof CLEAR_CURRENT_ORDER;
  readonly currentOrder: null;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCES;
  readonly currentOrder: TOrder;
}
export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderFailure {
  readonly type: typeof GET_ORDER_FAILURE;
}

export type TOrderActions =
  | ISetOrderSuccess
  | ISetOrderRequest
  | ISetOrderFailure
  | IClearOrderNumber
  | ISetCurrentOrder
  | IClearCurrentOrder
  | IGetOrderFailure
  | IGetOrderSuccess
  | IGetOrderRequest;

export const setOrderSuccess = (order: number): ISetOrderSuccess => ({ type: SET_ORDER_SUCCES, order: order });
export const setOrderRequest = (): ISetOrderRequest => ({ type: SET_ORDER_REQUEST });
export const setOrderFailure = (): ISetOrderFailure => ({ type: SET_ORDER_FAILURE });
export const clearOrderNumber = (): IClearOrderNumber => ({ type: CLEAR_ORDER, order: null });

export const getOrderSuccess = (currentOrder: TOrder): IGetOrderSuccess => ({
  type: GET_ORDER_SUCCES,
  currentOrder: currentOrder,
});

export const getOrderRequest = (): IGetOrderRequest => ({ type: GET_ORDER_REQUEST });
export const getOrderFailure = (): IGetOrderFailure => ({ type: GET_ORDER_FAILURE });
export const clearCurrentOrder = (): IClearCurrentOrder => ({ type: CLEAR_CURRENT_ORDER, currentOrder: null });

export const setCurrentOrder = (currentOrder: TOrder): ISetCurrentOrder => ({
  type: SET_CURRENT_ORDER,
  currentOrder: currentOrder,
});

export const setOrderThunk: AppThunk = (orderIngredients: Array<TIngredient>) => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(setOrderRequest());
  return api
    .setOrder(orderIngredients.map(item => item._id))
    .then(res => {
      if (res && res.success) {
        dispatch(setOrderSuccess(res.order.number));
      }
    })
    .then(() => dispatch(clearConstructor()))
    .catch(() => dispatch(setOrderFailure()))
    .finally(() => dispatch(hidePreloader()));
};

export const getOrderThunk: AppThunk = (order: number) => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(getOrderRequest());
  return api
    .getOrderData(order)
    .then(res => {
      if (res && res.success) {
        dispatch(getOrderSuccess(res.orders[0]));
      }
    })
    .catch(() => dispatch(getOrderFailure()))
    .finally(() => dispatch(hidePreloader()));
};
