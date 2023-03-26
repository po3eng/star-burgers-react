import * as actions from "./order";
import * as types from "../constants/orders";
import { TOrder } from "../../components/UI/feed-item/feed-item";

describe("Action creators of order", () => {
  it("Clear current order", () => {
    const expectedAction = {
      type: types.CLEAR_CURRENT_ORDER,
    };
    expect(actions.clearCurrentOrder()).toEqual(expectedAction);
  });
  it("Set current order", () => {
    const expectedAction = {
      type: types.SET_CURRENT_ORDER,
    };
    const order: TOrder = {
      _id: "641483d8936b17001be6ba1c",
      ingredients: ["60d3b41abdacab0026a733c7", "60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cc"],
      status: "done",
      name: "Space spicy флюоресцентный бургер",
      createdAt: "2023-03-17T15:14:32.582Z",
      updatedAt: "2023-03-17T15:14:33.082Z",
      number: 44586,
    };
    expect(actions.setCurrentOrder(order)).toEqual(expectedAction);
  });
});
