import { TOrder } from "../../components/UI/feed-item/feed-item";
import { TServerResponse } from "../../utils/request";
import {
  WS_FEED_SEND_MESSAGE,
  WS_FEED_CONNECTION_CLOSE,
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_ERROR,
  WS_FEED_CONNECTION_START,
  WS_FEED_CONNECTION_SUCCESS,
  WS_FEED_GET_MESSAGE,
} from "../constants/feed-web-socket";

export type TWsFeedResponse = TServerResponse<{
  orders: TOrder[];
  total: number;
  totalToday: number;
}>;

export interface IWsSendMessage {
  readonly type: typeof WS_FEED_SEND_MESSAGE;
  readonly payload: string;
}
export interface IWsConnectionClose {
  readonly type: typeof WS_FEED_CONNECTION_CLOSE;
}
export interface IWsConnectionClosed {
  readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export interface IWsConnectionError {
  readonly type: typeof WS_FEED_CONNECTION_ERROR;
}
export interface IWsConnectionStart {
  readonly type: typeof WS_FEED_CONNECTION_START;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWsGetMessage {
  readonly type: typeof WS_FEED_GET_MESSAGE;
  readonly data: TWsFeedResponse;
}

export const wsSendMessage = (payload: string): IWsSendMessage => ({ type: WS_FEED_SEND_MESSAGE, payload });
export const wsConnectionClose = (): IWsConnectionClose => ({ type: WS_FEED_CONNECTION_CLOSE });
export const wsConnectionClosed = (): IWsConnectionClosed => ({ type: WS_FEED_CONNECTION_CLOSED });
export const wsConnectionError = (): IWsConnectionError => ({ type: WS_FEED_CONNECTION_ERROR });
export const wsConnectionStart = (): IWsConnectionStart => ({ type: WS_FEED_CONNECTION_START });
export const wsConnectionSuccess = (): IWsConnectionSuccess => ({ type: WS_FEED_CONNECTION_SUCCESS });
export const wsGetMessage = (data: TWsFeedResponse): IWsGetMessage => ({ type: WS_FEED_GET_MESSAGE, data });

export type TWsFeedActions =
  | IWsSendMessage
  | IWsConnectionClose
  | IWsConnectionClosed
  | IWsConnectionError
  | IWsConnectionStart
  | IWsConnectionSuccess
  | IWsGetMessage;
