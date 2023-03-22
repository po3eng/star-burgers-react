import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { preloaderReducer } from "./preloader";
import { orderReducer } from "./order";
import { constructorReducer } from "./constructor";
import { authReducer } from "./auth";
import { wsFeedReducer } from "./feed-web-socket";
import { wsOrderReducer } from "./orders-web-socket";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  preloader: preloaderReducer,
  order: orderReducer,
  constr: constructorReducer,
  auth: authReducer,
  wsFeed: wsFeedReducer,
  wsOrders: wsOrderReducer,
});
