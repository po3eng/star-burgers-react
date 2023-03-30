import * as types from "../constants/feed-web-socket";
import { wsFeedReducer } from "./feed-web-socket";

describe("feed web-socket reducer", () => {
  const state = {
    orders: [],
    total: 0,
    totalToday: 0,
    wsConnected: false,
    wsError: false,
    wsSuccess: false,
    wsClosed: false,
    wsClose: false,
    wsStart: false,
  };

  it("should return this initial state", () => {
    expect(wsFeedReducer(undefined, {})).toEqual(state);
  });

  it("should return state with WS_FEED_CONNECTION_CLOSE ", () => {
    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_CONNECTION_CLOSE,
      }),
    ).toEqual({ ...state, wsClose: true });
  });
  it("should return state with WS_FEED_CONNECTION_CLOSED ", () => {
    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_CONNECTION_CLOSED,
      }),
    ).toEqual({ ...state, wsClosed: true });
  });

  it("should return state with WS_FEED_CONNECTION_ERROR ", () => {
    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_CONNECTION_ERROR,
      }),
    ).toEqual({ ...state, wsError: true });
  });

  it("should return state with WS_FEED_CONNECTION_START ", () => {
    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_CONNECTION_START,
      }),
    ).toEqual({ ...state, wsStart: true });
  });

  it("should return state with WS_FEED_CONNECTION_SUCCESS ", () => {
    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_CONNECTION_SUCCESS,
      }),
    ).toEqual({ ...state, wsSuccess: true, wsConnected: true });
  });

  it("should return state with WS_FEED_GET_MESSAGE ", () => {
    const fakeOrdersResponce = { orders: [], total: 5, totalToday: 5 };

    expect(
      wsFeedReducer(undefined, {
        type: types.WS_FEED_GET_MESSAGE,
        data: fakeOrdersResponce,
      }),
    ).toEqual({ ...state, ...fakeOrdersResponce });
  });
});
