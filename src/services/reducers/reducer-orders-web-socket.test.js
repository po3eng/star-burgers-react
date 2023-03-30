import * as types from "../constants/orders-web-socket";
import { wsOrderReducer } from "./orders-web-socket";

describe("order web-socket reducer", () => {
  const state = {
    orders: [],
    total: 0,
    totalToday: 0,
    wsConnected: false,
    wsError: false,
    wsSuccess: false,
  };

  it("should return this initial state", () => {
    expect(wsOrderReducer(undefined, {})).toEqual(state);
  });
});
