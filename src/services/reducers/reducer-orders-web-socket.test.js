import * as types from "../constants/orders-web-socket";
import { wsOrderReducer } from "./orders-web-socket";
import { initialState as state } from "./orders-web-socket";

describe("order web-socket reducer", () => {
  it("should return this initial state", () => {
    expect(wsOrderReducer(undefined, {})).toEqual(state);
  });

  it("should return state with WS_ORDERS_CONNECTION_CLOSE ", () => {
    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_CONNECTION_CLOSE,
      }),
    ).toEqual({ ...state, wsClose: true });
  });
  it("should return state with WS_ORDERS_CONNECTION_CLOSED ", () => {
    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_CONNECTION_CLOSED,
      }),
    ).toEqual({ ...state, wsClosed: true });
  });

  it("should return state with WS_ORDERS_CONNECTION_ERROR ", () => {
    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_CONNECTION_ERROR,
      }),
    ).toEqual({ ...state, wsError: true });
  });

  it("should return state with WS_ORDERS_CONNECTION_START ", () => {
    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_CONNECTION_START,
      }),
    ).toEqual({ ...state, wsStart: true });
  });

  it("should return state with WS_ORDERS_CONNECTION_SUCCESS ", () => {
    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_CONNECTION_SUCCESS,
      }),
    ).toEqual({ ...state, wsSuccess: true, wsConnected: true });
  });

  it("should return state with WS_ORDERS_GET_MESSAGE ", () => {
    const fakeOrdersResponce = { orders: [], total: 5, totalToday: 5 };

    expect(
      wsOrderReducer(undefined, {
        type: types.WS_ORDERS_GET_MESSAGE,
        data: fakeOrdersResponce,
      }),
    ).toEqual({ ...state, ...fakeOrdersResponce });
  });
});
