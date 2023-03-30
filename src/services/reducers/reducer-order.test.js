import * as types from "../constants/orders";
import { orderReducer } from "./order";

const currentOrder = {
  _id: "641483d8936b17001be6ba1c",
  ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc"],
  status: "done",
  name: "Space spicy флюоресцентный бургер",
  createdAt: "2023-03-17T15:14:32.582Z",
  updatedAt: "2023-03-17T15:14:33.082Z",
  number: 44586,
};



describe("oreder reducer", () => {
  const state = {
    order: null,
    orderRequest: false,
    orderFailed: false,
    orderSuccess: false,
    getOrderRequest: false,
    getOrderFailed: false,
    getOrderSuccess: false,
    currentOrder: null,
  };

  it("should return this initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(state);
  });

  it("should return state with GET_ORDER_REQUEST ", () => {
    expect(
      orderReducer(undefined, {
        type: types.GET_ORDER_REQUEST,
      }),
    ).toEqual({ ...state, getOrderRequest: true });
  });

  it("should return state with GET_ORDER_FAILURE ", () => {
    expect(
      orderReducer(undefined, {
        type: types.GET_ORDER_FAILURE,
      }),
    ).toEqual({ ...state, getOrderFailed: true });
  });

  it("should return state with GET_ORDER_SUCCES ", () => {
    expect(
      orderReducer(undefined, {
        type: types.GET_ORDER_SUCCES,
        currentOrder,
      }),
    ).toEqual({ ...state, getOrderSuccess: true, currentOrder });
  });

  it("should return state with CLEAR_CURRENT_ORDER ", () => {
    expect(
      orderReducer(undefined, {
        type: types.CLEAR_CURRENT_ORDER,
      }),
    ).toEqual({ ...state, currentOrder: null });
  });

  it("should return state with CLEAR_ORDER ", () => {
    expect(
      orderReducer(undefined, {
        type: types.CLEAR_ORDER,
      }),
    ).toEqual({ ...state, order: null });
  });

  it("should return state with SET_CURRENT_ORDER ", () => {
    expect(
      orderReducer(undefined, {
        type: types.SET_CURRENT_ORDER,
        currentOrder,
      }),
    ).toEqual({ ...state, currentOrder });
  });

  it("should return state with SET_ORDER_REQUEST ", () => {
    expect(
      orderReducer(undefined, {
        type: types.SET_ORDER_REQUEST,
      }),
    ).toEqual({ ...state, orderRequest: true });
  });

  it("should return state with SET_ORDER_SUCCESS", () => {
    const orderNuber = 999;
    expect(
      orderReducer(undefined, {
        type: types.SET_ORDER_SUCCESS,
        order: orderNuber,
      }),
    ).toEqual({ ...state, orderSuccess: true, order: orderNuber });
  });
  it("should return state with SET_ORDER_FAILURE ", () => {
    expect(
      orderReducer(undefined, {
        type: types.SET_ORDER_FAILURE,
      }),
    ).toEqual({ ...state, orderFailed: true });
  });
});
