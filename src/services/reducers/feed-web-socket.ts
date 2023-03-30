import {
  WS_FEED_CONNECTION_CLOSE,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_CONNECTION_CLOSED,
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
  wsStart: boolean;
  wsSuccess: boolean;
  wsClosed: boolean;
  wsClose: boolean;
};

const initialState: TWsFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  wsError: false,
  wsStart: false,
  wsSuccess: false,
  wsClosed: false,
  wsClose: false,
};

export const wsFeedReducer = (state = initialState, action: TWsFeedActions): TWsFeedState => {
  switch (action.type) {
    case WS_FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        wsError: false,
        wsSuccess: true,
        wsStart: false,
      };
    case WS_FEED_CONNECTION_START:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsStart: true,
      };

    case WS_FEED_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        wsError: true,
        wsSuccess: false,
        wsStart: false,
      };

    case WS_FEED_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsStart: false,
        wsClose: true,
      };
    case WS_FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        wsError: false,
        wsSuccess: false,
        wsStart: false,
        wsClosed: true,
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
