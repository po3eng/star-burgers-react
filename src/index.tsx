import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";

import { compose, createStore, applyMiddleware, Action, ActionCreator } from "redux";

import { Provider } from "react-redux";
import { rootReducer } from "./services/reducers";
import thunk, { ThunkAction } from "redux-thunk";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

import { TAuthActions } from "./services/actions/auth";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TAuthActions>>;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
