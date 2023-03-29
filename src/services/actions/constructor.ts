import { TIngredient } from "../../components/UI/ingredient-details/ingredient-details";
import {
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_BUN,
  CLEAR_CONSTRUCTOR,
  MOVE_CONSTRUCTOR_INGREDIENT,
} from "../constants/constructor";

export interface IAddBunToConstructor {
  type: typeof ADD_CONSTRUCTOR_BUN;
  ingredient: TIngredient;
}
export interface IAddIngredient {
  type: typeof ADD_CONSTRUCTOR_INGREDIENT;
  ingredient: TIngredient;
}
export interface IMoveConstructorIngredient {
  type: typeof MOVE_CONSTRUCTOR_INGREDIENT;
  dragIndex: number;
  hoverIndex: number;
}
export interface IDeleteIngredient {
  type: typeof DELETE_CONSTRUCTOR_INGREDIENT;
  id: number;
}
export interface IClearConstructor {
  type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorActions =
  | IAddBunToConstructor
  | IAddIngredient
  | IDeleteIngredient
  | IMoveConstructorIngredient
  | IClearConstructor;

export const addBunToConstructor = (ingredient: TIngredient): IAddBunToConstructor => ({
  type: ADD_CONSTRUCTOR_BUN,
  ingredient,
});
export const addIngredient = (ingredient: TIngredient): IAddIngredient => ({
  type: ADD_CONSTRUCTOR_INGREDIENT,
  ingredient: { ...ingredient },
});
export const deleteIngredient = (ingredient: TIngredient) => ({
  type: DELETE_CONSTRUCTOR_INGREDIENT,
  id: ingredient.id,
});
export const moveConstructorIngredient = (dragIndex: number, hoverIndex: number): IMoveConstructorIngredient => ({
  type: MOVE_CONSTRUCTOR_INGREDIENT,
  dragIndex,
  hoverIndex,
});
export const clearConstructor = (): IClearConstructor => ({ type: CLEAR_CONSTRUCTOR });
