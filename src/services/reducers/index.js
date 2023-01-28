import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { preloaderReducer } from "./preloader";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  preloader: preloaderReducer,
});
