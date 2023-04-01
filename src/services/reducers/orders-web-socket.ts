import {
  WS_ORDERS_CONNECTION_CLOSE,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_GET_MESSAGE,
  WS_ORDERS_CONNECTION_START,
  WS_ORDERS_CONNECTION_CLOSED,
} from "../constants/orders-web-socket";
import { TOrder } from "../../components/UI/feed-item/feed-item";
import { TWsOredrsActions } from "../actions/orders-web-socket";

type TWsOrdersState = {
  orders: TOrder[] | undefined;
  total: number | undefined;
  totalToday: number | undefined;
  wsConnected: boolean;
  wsError: boolean;
  wsSuccess: boolean;
  wsStart: boolean;
  wsClosed: boolean;
  wsClose: boolean;
};

export const initialState: TWsOrdersState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  wsError: false,
  wsSuccess: false,
  wsStart: false,
  wsClosed: false,
  wsClose: false,
};

export const wsOrderReducer = (state = initialState, action: TWsOredrsActions): TWsOrdersState => {
  switch (action.type) {
    case WS_ORDERS_CONNECTION_START:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsStart: true,
      };

    case WS_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: false,
        wsSuccess: true,
        wsStart: false,
      };

    case WS_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: true,
        wsSuccess: false,
      };

    case WS_ORDERS_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsClose: true,
      };
    case WS_ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsStart: false,
        wsClosed: true,
        wsClose: false,
      };

    case WS_ORDERS_GET_MESSAGE:
      return {
        ...state,
        orders: action.data.orders,
        total: action.data.total,
        totalToday: action.data.totalToday,
      };

    default:
      return state;
  }
};
