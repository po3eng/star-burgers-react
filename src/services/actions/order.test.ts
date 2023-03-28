import * as actions from "./order";
import * as types from "../constants/orders";
import { TOrder } from "../../components/UI/feed-item/feed-item";
import thunk, { ThunkDispatch } from "redux-thunk";
import fetchMock from "fetch-mock";
import { RootState, TApplicationActions } from "../..";
import createMockStore from "redux-mock-store";

type DispatchExts = ThunkDispatch<RootState, void, TApplicationActions>;

const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares)
const mockStore = createMockStore<RootState, DispatchExts>(middlewares);

const currentOrder: TOrder = {
  _id: "641483d8936b17001be6ba1c",
  ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc"],
  status: "done",
  name: "Space spicy флюоресцентный бургер",
  createdAt: "2023-03-17T15:14:32.582Z",
  updatedAt: "2023-03-17T15:14:33.082Z",
  number: 44586,
};

describe("Action creators of order", () => {
  it("Set current order", () => {
    const expectedAction = {
      type: types.SET_CURRENT_ORDER,
      currentOrder,
    };

    expect(actions.setCurrentOrder(currentOrder)).toEqual(expectedAction);
  });

  it("Clear current order", () => {
    const expectedAction = {
      type: types.CLEAR_CURRENT_ORDER,
      currentOrder: null,
    };
    expect(actions.clearCurrentOrder()).toEqual(expectedAction);
  });

  it("Get order faiure", () => {
    const expectedAction = {
      type: types.GET_ORDER_FAILURE,
    };
    expect(actions.getOrderFailure()).toEqual(expectedAction);
  });

  it("Get order request", () => {
    const expectedAction = {
      type: types.GET_ORDER_REQUEST,
    };
    expect(actions.getOrderRequest()).toEqual(expectedAction);
  });

  it("Get order success", () => {
    const expectedAction = {
      type: types.GET_ORDER_SUCCES,
      currentOrder,
    };
    expect(actions.getOrderSuccess(currentOrder)).toEqual(expectedAction);
  });
});

// describe("async actions of order", () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it("get order deteail by oreder number fetching", () => {
//     const order = 44586;
//     fetchMock.getOnce(`/api/orders/${order}`, {});

//     const expectedActions = [{ type: types.GET_ORDER_REQUEST }, { type: types.GET_ORDER_SUCCES, currentOrder }];
//     const store = mockStore();

//     return store.dispatch<any>(actions.getOrderThunk()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
