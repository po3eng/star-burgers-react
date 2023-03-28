import * as actions from "./ingredients";
import * as types from "../constants/ingredients";

import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";

describe("Action creators of ingredients", () => {
  const ingredient: TIngredient = {
    _id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  };

  it("clearCurrentIngredient", () => {
    const expectedAction = {
      type: types.CLEAR_CURRENT_INGREDIENT,
    };
    expect(actions.clearCurrentIngredient()).toEqual(expectedAction);
  });

  it("GET_INGREDIENTS_FAILED", () => {
    const expectedAction = {
      type: types.GET_INGREDIENTS_FAILED,
    };

    expect(actions.getIngredientFailure()).toEqual(expectedAction);
  });
  it("GET_INGREDIENTS_REQUEST", () => {
    const expectedAction = {
      type: types.GET_INGREDIENTS_REQUEST,
    };
    expect(actions.getIngredientRequest()).toEqual(expectedAction);
  });

  it("GET_INGREDIENTS_SUCCESS", () => {
    const ingredients: TIngredient[] = [ingredient];
    const expectedAction = {
      type: types.GET_INGREDIENTS_SUCCESS,
      ingredients,
    };
    expect(actions.getIngredientSuccess(ingredients)).toEqual(expectedAction);
  });

  it("SET_CURRENT_INGREDIENT", () => {
    const expectedAction = {
      type: types.SET_CURRENT_INGREDIENT,
      ingredient,
    };
    expect(actions.setCurrentIngredient(ingredient)).toEqual(expectedAction);
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
