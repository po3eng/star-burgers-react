import { removeCookie, setCookie } from "../../utils/cookies";
import { removeLocalStorage, setLocalStorage } from "../../utils/local-storage";
import { TUser } from "../actions/auth";
import { TTokens } from "../../utils/api";
import {
  GET_AUTH_REQUEST,
  GET_AUTH_FAILURE,
  GET_AUTH_SUCCESS,
  GET_FORGOT_FAILURE,
  GET_FORGOT_SUCCESS,
  GET_LOGOUT_FAILURE,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_REFRESH_TOKEN_FAILURE,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REGISTER_FAILURE,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_RESET_FAILURE,
  GET_RESET_REQUEST,
  GET_RESET_SUCCESS,
  GET_UPDATE_FAILURE,
  GET_UPDATE_REQUEST,
  GET_UPDATE_SUCCESS,
  GET_FORGOT_REQUEST,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CLEAR_USER,
} from "../constants/auth";
import { TAuthActions } from "../actions/auth";
type TAuthState = {
  user: TUser | null;
  authRequest: boolean;
  authSucces: boolean;
  authFailed: boolean;

  forgotRequest: boolean;
  forgotSuccess: boolean;
  forgotFailed: boolean;

  resetRequest: boolean;
  resetFailed: boolean;
  resetSuccess: boolean;

  updateRequest: boolean;
  updateFailed: boolean;
  updateSuccess: boolean;

  registerRequest: boolean;
  registerFailed: boolean;
  registerSuccess: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;
  logoutSuccess: boolean;

  userRequest: boolean;
  userFailed: boolean;

  refreshTokenRequest: boolean;
  refreshTokenFailed: boolean;
};

const initialState: TAuthState = {
  user: null,
  authRequest: false,
  authSucces: false,
  authFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  forgotSuccess: false,

  resetRequest: false,
  resetFailed: false,
  resetSuccess: false,

  updateRequest: false,
  updateFailed: false,
  updateSuccess: false,

  registerRequest: false,
  registerFailed: false,
  registerSuccess: false,

  logoutRequest: false,
  logoutFailed: false,
  logoutSuccess: false,

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

export const authReducer = (state = initialState, action: TAuthActions): TAuthState => {
  switch (action.type) {
    case GET_AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
        authSucces: false,
        authFailed: false,
      };
    }
    case GET_AUTH_SUCCESS: {
      updateTokensState(action.data);
      return {
        ...state,
        authFailed: false,
        user: action.data.user,
        authSucces: true,
        authRequest: false,
      };
    }
    case GET_AUTH_FAILURE: {
      return {
        ...state,
        authFailed: true,
        authRequest: false,
        authSucces: false,
      };
    }

    case GET_FORGOT_FAILURE: {
      return {
        ...state,
        forgotFailed: true,
        forgotRequest: false,
        forgotSuccess: false,
      };
    }

    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: true,
        forgotSuccess: false,
      };
    }

    case GET_FORGOT_SUCCESS: {
      return {
        ...state,
        forgotFailed: false,
        forgotRequest: false,
        forgotSuccess: true,
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
    case GET_USER_SUCCESS: {
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

    case GET_REFRESH_TOKEN_SUCCESS: {
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
      removeLocalStorage("accessToken");
      removeCookie("refreshToken");
      return { ...state, user: null };
    }

    case GET_RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSuccess: false,
      };
    }

    case GET_RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: false,
        resetSuccess: true,
      };
    }

    case GET_RESET_FAILURE: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
      };
    }

    case GET_UPDATE_REQUEST: {
      return {
        ...state,
        updateRequest: true,
        updateFailed: false,
        updateSuccess: false,
      };
    }

    case GET_UPDATE_SUCCESS: {
      return {
        ...state,
        user: action.user,
        updateRequest: false,
        updateSuccess: true,
      };
    }

    case GET_UPDATE_FAILURE: {
      return {
        ...state,
        updateRequest: false,
        updateFailed: true,
      };
    }

    case GET_LOGOUT_REQUEST: {
      return {
        ...state,
        updateRequest: true,
        updateFailed: false,
        updateSuccess: false,
      };
    }

    case GET_LOGOUT_SUCCESS: {
      return {
        ...state,
        updateRequest: false,
        updateSuccess: true,
      };
    }

    case GET_LOGOUT_FAILURE: {
      return {
        ...state,
        updateRequest: false,
        updateFailed: true,
      };
    }

    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
        registerSuccess: false,
      };
    }

    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerSuccess: true,
      };
    }

    case GET_REGISTER_FAILURE: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
