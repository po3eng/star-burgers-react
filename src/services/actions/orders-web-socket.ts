import {
  WS_ORDERS_SEND_MESSAGE,
  WS_ORDERS_CONNECTION_CLOSE,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_START,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_GET_MESSAGE,
} from "../constants/orders-web-socket";

export interface IWsOrdersSendMessage {
  readonly type: typeof WS_ORDERS_SEND_MESSAGE;
  readonly payload: string;
}
export interface IWsOrdersConnectionClose {
  readonly type: typeof WS_ORDERS_CONNECTION_CLOSE;
}
export interface IWsOrdersConnectionClosed {
  readonly type: typeof WS_ORDERS_CONNECTION_CLOSED;
}

export interface IWsOrdersConnectionError {
  readonly type: typeof WS_ORDERS_CONNECTION_ERROR;
}
export interface IWsOrdersConnectionStart {
  readonly type: typeof WS_ORDERS_CONNECTION_START;
}

export interface IWsOrdersConnectionSuccess {
  readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS;
}

export interface IWsOrdersGetMessage {
  readonly type: typeof WS_ORDERS_GET_MESSAGE;
  readonly data: string;
}

export const wsOrdersSendMessage = (payload: string): IWsOrdersSendMessage => ({
  type: WS_ORDERS_SEND_MESSAGE,
  payload,
});
export const wsOrdersConnectionClose = (): IWsOrdersConnectionClose => ({ type: WS_ORDERS_CONNECTION_CLOSE });
export const wsOrdersConnectionClosed = (): IWsOrdersConnectionClosed => ({ type: WS_ORDERS_CONNECTION_CLOSED });
export const wsOrdersConnectionError = (): IWsOrdersConnectionError => ({ type: WS_ORDERS_CONNECTION_ERROR });
export const wsOrdersConnectionStart = (): IWsOrdersConnectionStart => ({ type: WS_ORDERS_CONNECTION_START });
export const wsOrdersConnectionSuccess = (): IWsOrdersConnectionSuccess => ({ type: WS_ORDERS_CONNECTION_SUCCESS });
export const wsOrdersGetMessage = (data: string): IWsOrdersGetMessage => ({ type: WS_ORDERS_GET_MESSAGE, data });

export type TWsOredrsActions =
  | IWsOrdersSendMessage
  | IWsOrdersConnectionClose
  | IWsOrdersConnectionClosed
  | IWsOrdersConnectionError
  | IWsOrdersConnectionStart
  | IWsOrdersConnectionSuccess
  | IWsOrdersGetMessage;
