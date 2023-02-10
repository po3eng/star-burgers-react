import {
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCES,
  GET_FORGOT_FAILURE,
  GET_FORGOT_REQUEST,
  GET_FORGOT_SUCCES,
  CLEAR_USER,
} from "../actions/auth";

import { setCookie, getCookie } from "../../utils/cookies";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../utils/local-storage";

const initialState = {
  user: null,
  authRequest: false,
  authFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  isForgot: false,
};

// описание редьюсера
// 1 атворизация
// 2. регистрация
// 3. выход
// 4. рефреш токена

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case GET_AUTH_SUCCES: {
      let authToken = null;
      if (action.data.accessToken) {
        authToken = action.data.accessToken.split("Bearer ")[1];
      }
      if (authToken) {
        setLocalStorage("token", authToken);
      }
      if (action.data.refreshToken) {
        setCookie("token", action.data.refreshToken);
      }
      return {
        ...state,
        authFailed: false,
        user: action.data.user,
        authRequest: false,
      };
    }
    case GET_AUTH_FAILURE: {
      return { ...state, authFailed: true, authRequest: false };
    }

    case GET_FORGOT_FAILURE: {
      return { ...state, forgotFailed: true, forgotRequest: false };
    }

    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: true,
        isForgot: false,
      };
    }
    case GET_FORGOT_SUCCES: {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: false,
        isForgot: true,
      };
    }

    case CLEAR_USER: {
      removeLocalStorage("token");
      // очистка токенов
      // очистка пользователя
      return { ...state, user: null };
    }

    default: {
      return state;
    }
  }
};
