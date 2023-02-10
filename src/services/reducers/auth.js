import {
  GET_AUTH_FAILURE,
  GET_AUTH_REQUEST,
  GET_AUTH_SUCCES,
  GET_FORGOT_FAILURE,
  GET_FORGOT_REQUEST,
  GET_FORGOT_SUCCES,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCES,
  CLEAR_USER,
  GET_REFRESH_TOKEN_SUCCES,
  GET_REFRESH_TOKEN_FAILURE,
  GET_REFRESH_TOKEN_REQUEST,
} from "../actions/auth";

import { removeCookie, setCookie } from "../../utils/cookies";
import { removeLocalStorage, setLocalStorage } from "../../utils/local-storage";

const initialState = {
  user: null,
  authRequest: false,
  authFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  isForgot: false,

  userRequest: false,
  userFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,
};

const updateTokensState = ({ accessToken, refreshToken }) => {
  let authToken = null;
  if (accessToken) {
    authToken = accessToken.split("Bearer ")[1];
  }
  if (authToken) {
    setLocalStorage("token", authToken);
  }
  if (refreshToken) {
    setCookie("token", refreshToken);
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case GET_AUTH_SUCCES: {
      updateTokensState(action.data);
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
    case GET_USER_FAILURE: {
      return { ...state, userFailed: true, userRequest: false };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        userFailed: false,
        userRequest: true,
      };
    }
    case GET_USER_SUCCES: {
      return {
        ...state,
        userFailed: false,
        userRequest: false,
        user: action.user,
      };
    }

    case GET_REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: true,
      };
    }

    case GET_REFRESH_TOKEN_SUCCES: {
      updateTokensState(action.data);
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: false,
      };
    }

    case GET_REFRESH_TOKEN_FAILURE: {
      return { ...state, refreshTokenFailed: true, refreshTokenRequest: false };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: true,
      };
    }

    case CLEAR_USER: {
      removeLocalStorage("token");
      removeCookie("token", "");
      return { ...state, user: null };
    }

    default: {
      return state;
    }
  }
};
