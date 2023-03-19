import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

import { compose, createStore, applyMiddleware, Action, ActionCreator, Dispatch } from "redux";

import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk, { ThunkAction } from "redux-thunk";
import { TAuthActions } from "./services/actions/auth";
import { TOrederActions } from "./services/actions/order";
import { TIngredientActions } from "./services/actions/ingredients";
import { TPreloaderActions } from "./services/actions/preloader";
import { TConstructorActions } from "./services/actions/constructor";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions =
  | TAuthActions
  | TOrederActions
  | TIngredientActions
  | TPreloaderActions
  | TConstructorActions;

// export type AppDispatch = typeof store.dispatch;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = Dispatch<TApplicationActions>;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
