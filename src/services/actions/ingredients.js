import api from "../../utils/api";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SET_CURRENT_INGREDIENT = "SET_DETAIL_INGREDIENT";
export const CLEAR_CURRENT_INGREDIENT = "CLEAR_CURRENT_INGREDIENT";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const GET_ORDER_SUCCESS = "GET_ORER_SUCCESS";

export const SET_ORDER = "SET_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const UPDATE_TYPE = "UPDATE_TYPE";
export const INCREASE_INGREDIENT_COUNT = "INCREASE_INGREDIENT_COUNT";
export const DECREASE_INGREDIENT_COUNT = "DECREASE_INGREDIENT_COUNT";

export const DELETE_ORDER_INGREDIENT = "DELETE_ORDER_INGREDIENT";

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });
  api.getIngredients().then((res) => {
    if (res && res.success) {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: res.data,
      });
    } else {
      dispatch({
        type: GET_INGREDIENTS_FAILED,
      });
    }
  });
};

export const deleteOrderIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: DECREASE_INGREDIENT_COUNT,
    _id: ingredient._id,
  });
  dispatch({
    type: DELETE_ORDER_INGREDIENT,
    id: ingredient.id,
  });
};

export const setOrder = (orderIngredients) => (dispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  api.setOrder(orderIngredients).then((res) => {
    if (res && res.success) {
      dispatch({
        type: GET_ORDER_SUCCESS,
        order: res.order,
      });
    } else {
      dispatch({
        type: GET_ORDER_FAILED,
      });
    }
  });
};