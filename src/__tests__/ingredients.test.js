import * as actions from "../services/actions/ingredients";
import * as types from "../services/constants/ingredients";
import { ingredientsReducer } from "../services/reducers/ingredients";

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

describe("Action creators of ingredients", () => {
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

describe("ingredient reducer", () => {
  const state = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
    ingredientsSuccess: false,
    currentIngredient: null,
  };
  it("should return this initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(state);
  });

  it("should return state with CLEAR_CURRENT_INGREDIENT ", () => {
    expect(
      ingredientsReducer(
        { ...state, currentIngredient: ingredient },
        {
          type: types.CLEAR_CURRENT_INGREDIENT,
        },
      ),
    ).toEqual(state);
  });

  it("should return state with GET_INGREDIENTS_FAILED ", () => {
    expect(
      ingredientsReducer(undefined, {
        type: types.GET_INGREDIENTS_FAILED,
      }),
    ).toEqual({ ...state, ingredientsFailed: true });
  });
  it("should return state with GET_INGREDIENTS_REQUEST ", () => {
    expect(
      ingredientsReducer(undefined, {
        type: types.GET_INGREDIENTS_REQUEST,
      }),
    ).toEqual({ ...state, ingredientsRequest: true });
  });
  it("should return state with GET_INGREDIENTS_SUCCESS ", () => {
    expect(
      ingredientsReducer(undefined, {
        type: types.GET_INGREDIENTS_SUCCESS,
        ingredients: [ingredient],
      }),
    ).toEqual({ ...state, ingredientsSuccess: true, ingredients: [ingredient] });
  });
});
