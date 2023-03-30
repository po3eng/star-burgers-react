import * as types from "../constants/constructor";
import { constructorReducer } from "./constructor";

const bun = {
  _id: "60d3b41abdacab0026a733c6",
  id: "60d3b41abdacab0026a733c6",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};

describe("constructor reducer", () => {
  const state = {
    constructorIngredients: [],
    bun: null,
  };

  it("should return this initial state", () => {
    expect(constructorReducer(undefined, {})).toEqual(state);
  });
  it("should return state with ADD_CONSTRUCTOR_BUN ", () => {
    expect(
      constructorReducer(undefined, {
        type: types.ADD_CONSTRUCTOR_BUN,
        ingredient: bun,
      }),
    ).toEqual({ ...state, bun });
  });

  it("should return state with ADD_CONSTRUCTOR_INGREDIENT ", () => {
    expect(
      constructorReducer(undefined, {
        type: types.ADD_CONSTRUCTOR_INGREDIENT,
        ingredient: bun,
      }),
    ).toEqual({ ...state, constructorIngredients: [bun] });
  });

  it("should return state with CLEAR_CONSTRUCTOR ", () => {
    expect(
      constructorReducer(undefined, {
        type: types.CLEAR_CONSTRUCTOR,
      }),
    ).toEqual(state);
  });

  it("should return state with DELETE_CONSTRUCTOR_INGREDIENT ", () => {
    expect(
      constructorReducer(undefined, {
        type: types.ADD_CONSTRUCTOR_INGREDIENT,
        ingredient: bun,
      }),
    ).toEqual({ ...state, constructorIngredients: [bun] });

    expect(
      constructorReducer(undefined, {
        type: types.DELETE_CONSTRUCTOR_INGREDIENT,
        id: bun._id,
      }),
    ).toEqual(state);
  });

  it("should return state with MOVE_CONSTRUCTOR_INGREDIENT ", () => {
    const initialState = {
      constructorIngredients: [{ id: 1 }, { id: 2 }, { id: 3 }],
      bun: null,
    };

    const mutatedState = {
      constructorIngredients: [{ id: 1 }, { id: 3 }, { id: 2 }],
      bun: null,
    };

    const dragIndex = 1;
    const hoverIndex = 2;

    expect(
      constructorReducer(initialState, {
        type: types.MOVE_CONSTRUCTOR_INGREDIENT,
        dragIndex,
        hoverIndex,
      }),
    ).toEqual(mutatedState);
  });
});
