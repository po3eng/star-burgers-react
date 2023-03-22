import api from "../../utils/api";
import { hidePreloader, showPreloader } from "./preloader";
import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import { AppDispatch, AppThunk } from "../..";

import {
  GET_INGREDIENTS_SUCCESS,
  CLEAR_CURRENT_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_REQUEST,
  SET_CURRENT_INGREDIENT,
} from "../constants/ingredients";

export interface IGetIngredientRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: Array<TIngredient>;
}
export interface IGetIngredientFailure {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}
export interface IClearCurrentIngredient {
  readonly type: typeof CLEAR_CURRENT_INGREDIENT;
}
export interface ISetCurrentIngredient {
  readonly type: typeof SET_CURRENT_INGREDIENT;
  readonly ingredient: TIngredient;
}

export type TIngredientActions =
  | IGetIngredientRequest
  | IGetIngredientSuccess
  | IGetIngredientFailure
  | IClearCurrentIngredient
  | ISetCurrentIngredient;

export const getIngredientRequest = (): IGetIngredientRequest => ({ type: GET_INGREDIENTS_REQUEST });
export const getIngredientFailure = (): IGetIngredientFailure => ({ type: GET_INGREDIENTS_FAILED });
export const getIngredientSuccess = (ingredients: Array<TIngredient>): IGetIngredientSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients,
});

export const clearCurrentIngredient = (): IClearCurrentIngredient => ({ type: CLEAR_CURRENT_INGREDIENT });
export const setCurrentIngredient = (ingredient: TIngredient): ISetCurrentIngredient => ({
  type: SET_CURRENT_INGREDIENT,
  ingredient,
});

export const getIngredientsThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(getIngredientRequest());
  api
    .getIngredients()
    .then(res => {
      if (res && res.success) {
        dispatch(getIngredientSuccess(res.data));
      } else {
        dispatch(getIngredientFailure());
      }
    })
    .catch(() => dispatch(getIngredientFailure()))
    .finally(() => dispatch(hidePreloader()));
};
