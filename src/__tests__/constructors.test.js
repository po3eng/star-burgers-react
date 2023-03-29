import * as actions from "../services/actions/constructor";
import * as types from "../services/constants/constructor";
describe("Action creators of constructor", () => {
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
  it("ADD_CONSTRUCTOR_BUN", () => {
    const expectedAction = {
      type: types.ADD_CONSTRUCTOR_BUN,
      ingredient: bun,
    };
    expect(actions.addBunToConstructor(bun)).toEqual(expectedAction);
  });

  it("ADD_CONSTRUCTOR_INGREDIENT", () => {
    const expectedAction = {
      type: types.ADD_CONSTRUCTOR_INGREDIENT,
      ingredient: bun,
    };
    expect(actions.addIngredient(bun)).toEqual(expectedAction);
  });
  it("CLEAR_CONSTRUCTOR", () => {
    const expectedAction = {
      type: types.CLEAR_CONSTRUCTOR,
    };
    expect(actions.clearConstructor()).toEqual(expectedAction);
  });

  it("DELETE_CONSTRUCTOR_INGREDIENT", () => {
    const expectedAction = {
      type: types.DELETE_CONSTRUCTOR_INGREDIENT,
      id: bun._id,
    };
    expect(actions.deleteIngredient(bun)).toEqual(expectedAction);
  });
  it("MOVE_CONSTRUCTOR_INGREDIENT", () => {
    const dragIndex = 1;
    const hoverIndex = 2;
    const expectedAction = {
      type: types.MOVE_CONSTRUCTOR_INGREDIENT,
      dragIndex,
      hoverIndex,
    };
    expect(actions.moveConstructorIngredient(dragIndex, hoverIndex)).toEqual(expectedAction);
  });
});
