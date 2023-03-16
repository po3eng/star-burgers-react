import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { preloaderReducer } from "./preloader";
import { orderReducer } from "./order";
import { constructorReducer } from "./constructor";
import { authReducer } from "./auth";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  preloader: preloaderReducer,
  order: orderReducer,
  constr: constructorReducer,
  auth: authReducer,
});