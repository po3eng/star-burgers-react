import {
  WS_ORDERS_CONNECTION_CLOSE,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_SUCCESS,
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
};

const initialState: TWsOrdersState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  wsError: false,
  wsSuccess: false,
};

export const wsOrderReducer = (state = initialState, action: TWsOredrsActions): TWsOrdersState => {
  switch (action.type) {
    case WS_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: false,
        wsSuccess: false,
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
      };

    default:
      return state;
  }
};
