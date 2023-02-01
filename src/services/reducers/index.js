import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { preloaderReducer } from "./preloader";
import { orderReducer } from "./order";

import { constructorReducer } from "./constructor";
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  preloader: preloaderReducer,
  order: orderReducer,
  constr: constructorReducer,
});
