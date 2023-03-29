import * as actions from "../services/actions/ingredients";
import * as types from "../services/constants/ingredients";

describe("Action creators of ingredients", () => {
  const ingredient = {
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

  it("GET_INGREDIENTS_SUCCESS", () => {
    const ingredients = [ingredient];
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
