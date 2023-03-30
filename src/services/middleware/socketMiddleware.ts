import type { Middleware, MiddlewareAPI } from "redux";

import type { AppDispatch, RootState } from "../..";
import { feedActions } from "../constants/feed-web-socket";
import { ordersActions } from "../constants/orders-web-socket";

type TWSActions = typeof feedActions | typeof ordersActions;

export const socketMiddleware = (wsActions: TWSActions, wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: any) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsClose, wsClosed, wsError, wsGetMessage, wsStart, wsSuccess } = wsActions;

      if (type === wsStart) {
        const params = payload ?? "";
        socket = new WebSocket(wsUrl + params);
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: wsSuccess });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: wsError });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsGetMessage, data: JSON.parse(data) });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: wsClosed });
        };

        if (type === wsClose) {
          socket.close();
        }
      }
      next(action);
    };
  }) as Middleware;
};
