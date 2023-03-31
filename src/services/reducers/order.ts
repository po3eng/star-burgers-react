import {
  SET_ORDER_REQUEST,
  SET_ORDER_FAILURE,
  SET_ORDER_SUCCESS,
  CLEAR_ORDER,
  CLEAR_CURRENT_ORDER,
  SET_CURRENT_ORDER,
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCES,
} from "../constants/orders";
import { TOrderActions } from "../actions/order";
import { TOrder } from "../../components/UI/feed-item/feed-item";

type TOrderState = {
  order: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
  orderSuccess: boolean;
  getOrderRequest: boolean;
  getOrderFailed: boolean;
  getOrderSuccess: boolean;
  currentOrder: TOrder | null;
};

export const initialState: TOrderState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
  orderSuccess: false,
  getOrderRequest: false,
  getOrderFailed: false,
  getOrderSuccess: false,
  currentOrder: null,
};

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
  switch (action.type) {
    case SET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case SET_ORDER_FAILURE: {
      return {
        ...state,
        order: null,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case SET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
        orderSuccess: true,
        orderFailed: false,
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        order: null,
      };
    }

    case SET_CURRENT_ORDER: {
      return {
        ...state,
        currentOrder: action.currentOrder,
      };
    }

    case GET_ORDER_SUCCES: {
      return {
        ...state,
        currentOrder: action.currentOrder,
        getOrderRequest: false,
        getOrderSuccess: true,
        getOrderFailed: false,
      };
    }

    case GET_ORDER_REQUEST: {
      return {
        ...state,
        getOrderRequest: true,
        getOrderSuccess: false,
        getOrderFailed: false,
      };
    }
    case GET_ORDER_FAILURE: {
      return {
        ...state,
        getOrderRequest: false,
        getOrderSuccess: false,
        getOrderFailed: true,
      };
    }

    case CLEAR_CURRENT_ORDER: {
      return {
        ...state,
        currentOrder: null,
      };
    }

    default: {
      return state;
    }
  }
};
