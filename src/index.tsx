import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

import { compose, createStore, applyMiddleware, Action, ActionCreator, Dispatch } from "redux";

import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk, { ThunkAction } from "redux-thunk";
import { TAuthActions } from "./services/actions/auth";
import { TOrderActions } from "./services/actions/order";
import { TIngredientActions } from "./services/actions/ingredients";
import { TPreloaderActions } from "./services/actions/preloader";
import { TConstructorActions } from "./services/actions/constructor";
import { TWsFeedActions } from "./services/actions/feed-web-socket";
import { TWsOredrsActions } from "./services/actions/orders-web-socket";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import { feedActions } from "./services/constants/feed-web-socket";
import { ordersActions } from "./services/constants/orders-web-socket";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(feedActions, "wss://norma.nomoreparties.space/orders/all")),
  applyMiddleware(socketMiddleware(ordersActions, `wss://norma.nomoreparties.space/orders`)),
);
const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  | TAuthActions
  | TOrderActions
  | TIngredientActions
  | TPreloaderActions
  | TConstructorActions
  | TWsOredrsActions
  | TWsFeedActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;
export type AppDispatch = Dispatch<TApplicationActions>;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
