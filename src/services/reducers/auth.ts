import { removeCookie, setCookie } from "../../utils/cookies";
import { removeLocalStorage, setLocalStorage } from "../../utils/local-storage";
import { TUser } from "../actions/auth";
import { TTokens } from "../../utils/api";

type TAuthState = {
  user: TUser | null;
  authRequest: boolean;
  authFailed: boolean;

  forgotRequest: boolean;
  forgotFailed: boolean;
  isForgot: boolean;

  resetRequest: boolean;
  resetFailed: boolean;
  resetSuccess: boolean;

  userRequest: boolean;
  userFailed: boolean;

  refreshTokenRequest: boolean;
  refreshTokenFailed: boolean;
};

const initialState = {
  user: null,
  authRequest: false,
  authFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  isForgot: false,

  resetRequest: false,
  resetFailed: false,
  resetSuccess: false,

  userRequest: false,
  userFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,
};

const updateTokensState = ({ accessToken, refreshToken }: TTokens) => {
  let authToken = null;
  if (accessToken) {
    authToken = accessToken.split("Bearer ")[1];
  }
  if (authToken) {
    setLocalStorage("accessToken", authToken);
  }
  if (refreshToken) {
    setCookie("refreshToken", refreshToken);
  }
};

export const authReducer = (state: TAuthState = initialState, action: any) => {
  switch (action.type) {
    case "GET_AUTH_REQUEST": {
      return {
        ...state,
        authRequest: true,
      };
    }
    case "GET_AUTH_SUCCES": {
      updateTokensState(action.data);
      return {
        ...state,
        authFailed: false,
        user: action.data.user,
        authRequest: false,
      };
    }
    case "GET_AUTH_FAILURE": {
      return { ...state, authFailed: true, authRequest: false };
    }

    case "GET_FORGOT_FAILURE": {
      return { ...state, forgotFailed: true, forgotRequest: false };
    }

    case "GET_FORGOT_REQUEST": {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: true,
        isForgot: false,
      };
    }

    case "GET_FORGOT_SUCCES": {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: false,
        isForgot: true,
      };
    }
    case "GET_USER_FAILURE": {
      return { ...state, userFailed: true, userRequest: false };
    }

    case "GET_USER_REQUEST": {
      return {
        ...state,
        userFailed: false,
        userRequest: true,
      };
    }
    case "GET_USER_SUCCES": {
      return {
        ...state,
        userFailed: false,
        userRequest: false,
        user: action.user,
      };
    }

    case "GET_REFRESH_TOKEN_REQUEST": {
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: true,
      };
    }

    case "GET_REFRESH_TOKEN_SUCCES": {
      updateTokensState(action.data);
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: false,
      };
    }

    case "GET_REFRESH_TOKEN_FAILURE": {
      return { ...state, refreshTokenFailed: true, refreshTokenRequest: false };
    }

    case "GET_USER_REQUEST": {
      return {
        ...state,
        refreshTokenFailed: false,
        refreshTokenRequest: true,
      };
    }

    case "CLEAR_USER": {
      removeLocalStorage("accessToken");
      removeCookie("refreshToken");
      return { ...state, user: null };
    }

    case "GET_RESET_REQUEST": {
      updateTokensState(action.data);
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSuccess: false,
      };
    }

    case "GET_RESET_SUCCES": {
      updateTokensState(action.data);
      return {
        ...state,
        resetRequest: false,
        resetSuccess: true,
      };
    }

    case "GET_RESET_FAILURE": {
      updateTokensState(action.data);
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
