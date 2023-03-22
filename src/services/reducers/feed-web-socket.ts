import {
  WS_FEED_CONNECTION_CLOSE,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
} from "../constants/feed-web-socket";
import { TWsFeedActions } from "../actions/feed-web-socket";
import { TOrder } from "../../components/UI/feed-item/feed-item";

type TWsFeedState = {
  orders: TOrder[] | undefined;
  total: number | undefined;
  totalToday: number | undefined;
  wsConnected: boolean;
  wsError: boolean;
  wsSuccess: boolean;
};

const initialState: TWsFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  wsError: false,
  wsSuccess: false,
};

export const wsFeedReducer = (state = initialState, action: TWsFeedActions): TWsFeedState => {
  switch (action.type) {
    case WS_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: false,
        wsSuccess: false,
      };

    case WS_FEED_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: true,
        wsSuccess: false,
      };

    case WS_FEED_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
      };

    case WS_FEED_GET_MESSAGE:
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
