import api from "../../utils/api";
import { getCookie } from "../../utils/cookies";

import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCES = "GET_AUTH_SUCCES";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";

export const GET_FORGOT_REQUEST = "GET_FORGOT_REQUEST";
export const GET_FORGOT_SUCCES = "GET_FORGOT_SUCCES";
export const GET_FORGOT_FAILURE = "GET_FORGOT_FAILURE";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCES = "GET_USER_SUCCES";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

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

/// TODO: описать все экшены для thunk

export const signIn = (form) => (dispatch) => {
  dispatch({ type: SHOW_PRELOADER });
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
      dispatch({ type: HIDE_PRELOADER });
    });
};

export const forgotPassword = (form) => (dispatch) => {
  dispatch({ type: SHOW_PRELOADER });
  dispatch({ type: GET_FORGOT_REQUEST });
  api
    .forgotPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_FORGOT_SUCCES })
        : dispatch({ type: GET_AUTH_FAILURE });
    })
    .catch((e) => {
      dispatch({ type: GET_AUTH_FAILURE });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};

export const resetPassword = (form) => (dispatch) => {
  dispatch({ type: SHOW_PRELOADER });
  dispatch({ type: GET_FORGOT_REQUEST });
  api
    .resetPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch({ type: GET_FORGOT_SUCCES })
        : dispatch({ type: GET_AUTH_FAILURE });
    })
    .catch((e) => {
      dispatch({ type: GET_AUTH_FAILURE });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
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
  dispatch({ type: GET_REFRESH_TOKEN_REQUEST });
  api
    .registrationUser(form)
    .then((res) => {
      res && res.success && dispatch(setUser(res));
    })
    .catch((e) => {
      dispatch({ type: GET_REFRESH_TOKEN_FAILURE });
    });
};

// при обновленнии пользователя
// обновить данные в стэйте
// если надо обновить хранидища

export const updateUserData = (form) => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .upadateUserData(form)
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

export const logout = (token) => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .logout({ token })
    .then((res) => {
      if (res && res.success) {
        dispatch({ type: CLEAR_USER });
      }
    })
    .catch((e) => {
      // при любом раскладе на страницу логина
      dispatch({ type: GET_USER_FAILURE });
    });
};
