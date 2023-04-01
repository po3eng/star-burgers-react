import * as actions from "../services/actions/order";
import * as types from "../services/constants/orders";

const currentOrder = {
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
  it("Get order success", () => {
    const expectedAction = {
      type: types.GET_ORDER_SUCCES,
      currentOrder,
    };
    expect(actions.getOrderSuccess(currentOrder)).toEqual(expectedAction);
  });
});
