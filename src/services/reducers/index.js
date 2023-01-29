import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { preloaderReducer } from "./preloader";
import { dropTargetReducer } from "./drop-target";


export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  preloader: preloaderReducer,
  boardList: dropTargetReducer,
});
