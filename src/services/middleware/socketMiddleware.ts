import type { Middleware, MiddlewareAPI } from "redux";

import type { AppDispatch, RootState, TApplicationActions } from "../..";
import { feedActions } from "../constants/feed-web-socket";
import { ordersActions } from "../constants/orders-web-socket";

type TWSActions = typeof feedActions | typeof ordersActions;

export const socketMiddleware = (wsActions: TWSActions, wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: any) => {
      console.log(action);
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsClose, wsClosed, wsError, wsGetMessage, wsStart, wsSuccess } = wsActions;

      if (type === wsStart) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          console.log("open");
          dispatch({ type: wsSuccess });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          console.log("error");
          dispatch({ type: wsError });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch({ type: wsGetMessage, data });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          console.log("onclose");
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
