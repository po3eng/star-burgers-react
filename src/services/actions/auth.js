import api from "../../utils/api";
import { getCookie } from "../../utils/cookies";

import { showPreloader, hidePreloader } from "./preloader";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCES = "GET_AUTH_SUCCES";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";

export const GET_FORGOT_REQUEST = "GET_FORGOT_REQUEST";
export const GET_FORGOT_SUCCES = "GET_FORGOT_SUCCES";
export const GET_FORGOT_FAILURE = "GET_FORGOT_FAILURE";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCES = "GET_USER_SUCCES";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const GET_RESET_REQUEST = "GET_USER_REQUEST";
export const GET_RESET_SUCCES = "GET_USER_SUCCES";
export const GET_RESET_FAILURE = "GET_USER_FAILURE";

export const GET_REGISTER_REQUEST = "GET_USER_REQUEST";
export const GET_REGISTER_SUCCES = "GET_USER_SUCCES";
export const GET_REGISTER_FAILURE = "GET_USER_FAILURE";

export const GET_UPDATE_REQUEST = "GET_USER_REQUEST";
export const GET_UPDATE_SUCCES = "GET_USER_SUCCES";
export const GET_UPDATE_FAILURE = "GET_USER_FAILURE";

export const GET_LOGOUT_REQUEST = "GET_USER_REQUEST";
export const GET_LOGOUT_SUCCES = "GET_USER_SUCCES";
export const GET_LOGOUT_FAILURE = "GET_USER_FAILURE";

export const GET_REFRESH_TOKEN_REQUEST = "GET_REFRESH_TOKEN_REQUEST";
export const GET_REFRESH_TOKEN_SUCCES = "GET_REFRESH_TOKEN_SUCCES";
export const GET_REFRESH_TOKEN_FAILURE = "GET_REFRESH_TOKEN_FAILURE";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const setUser = (data) => ({ type: GET_AUTH_SUCCES, data: data });
export const updateToken = (data) => ({
  type: GET_REFRESH_TOKEN_SUCCES,
  data: data,
});

export const signIn = (form) => (dispatch) => {
  dispatch(showPreloader);
  dispatch({ type: GET_AUTH_REQUEST });
  api
    .login(form)
    .then((res) => {
      res && res.success
        ? dispatch(setUser(res))
        : dispatch({ type: GET_AUTH_FAILURE });
    })
    .catch((e) => {
      dispatch({ type: GET_FORGOT_FAILURE });
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const forgotPassword = (form) => (dispatch) => {
  dispatch(showPreloader());
  dispatch({ type: GET_FORGOT_REQUEST });
  return api
    .forgotPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_FORGOT_SUCCES })
        : dispatch({ type: GET_AUTH_FAILURE });
      return res;
    })
    .catch((e) => {
      dispatch({ type: GET_AUTH_FAILURE });
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const resetPassword = (form) => (dispatch) => {
  dispatch(showPreloader());
  dispatch({ type: GET_RESET_REQUEST });
  return api
    .resetPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_RESET_SUCCES })
        : dispatch({ type: GET_RESET_FAILURE });
      return res;
    })
    .catch((e) => {
      dispatch({ type: GET_RESET_FAILURE });
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const userData = () => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .getUserData()
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_USER_SUCCES, user: res.user })
        : dispatch({ type: GET_USER_FAILURE });
    })
    .catch((e) => {
      e.status === 403 && dispatch(refreshToken(getCookie("token")));
      dispatch({ type: GET_USER_FAILURE });
    });
};

export const refreshToken = (token) => (dispatch) => {
  dispatch({ type: GET_REFRESH_TOKEN_REQUEST });
  api
    .refreshUserToken({ token })
    .then((res) => {
      res && res.success
        ? dispatch(updateToken(res))
        : dispatch({ type: GET_REFRESH_TOKEN_FAILURE });
    })
    .catch((e) => {
      e.status === 401 && dispatch({ type: CLEAR_USER });
      dispatch({ type: GET_REFRESH_TOKEN_FAILURE });
    });
};

export const registerUser = (form) => (dispatch) => {
  dispatch({ type: GET_REGISTER_REQUEST });
  api
    .registrationUser(form)
    .then((res) => {
      res && res.success && dispatch(setUser(res));
    })
    .catch((e) => {
      dispatch({ type: GET_REGISTER_FAILURE });
    });
};

export const updateUserData = (form) => (dispatch) => {
  dispatch({ type: GET_UPDATE_REQUEST });
  api
    .upadateUserData(form)
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_UPDATE_SUCCES, user: res.user })
        : dispatch({ type: GET_UPDATE_FAILURE });
    })
    .catch((e) => {
      e.status === 403 && dispatch(refreshToken(getCookie("token")));
      dispatch({ type: GET_UPDATE_FAILURE });
    });
};

export const logout = (token) => (dispatch) => {
  dispatch({ type: GET_LOGOUT_REQUEST });
  api
    .logout({ token })
    .then((res) => {
      if (res && res.success) {
        dispatch({ type: GET_LOGOUT_SUCCES });
        dispatch({ type: CLEAR_USER });
      }
    })
    .catch((e) => {
      // при любом раскладе на страницу логина
      dispatch({ type: GET_LOGOUT_FAILURE });
    });
};
