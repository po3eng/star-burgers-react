import api from "../../utils/api";

import { SHOW_PRELOADER, HIDE_PRELOADER } from "./preloader";

export const GET_AUTH_REQUEST = "GET_AUTH_REQUEST";
export const GET_AUTH_SUCCES = "GET_AUTH_SUCCES";
export const GET_AUTH_FAILURE = "GET_AUTH_FAILURE";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const signIn = (form) => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER,
  });
  dispatch({
    type: GET_AUTH_REQUEST,
  });
  api
    .login(form)
    .then((res) => {
      if (res && res.success) {
        dispatch(setUser(res));
      } else {
        dispatch({
          type: GET_AUTH_FAILURE,
        });
      }
    })
    .catch((e) => {
      dispatch({
        type: GET_AUTH_FAILURE,
      });
    })
    .finally(() => {
      dispatch({ type: HIDE_PRELOADER });
    });
};

export const setUser = (data) => {
  return {
    type: GET_AUTH_SUCCES,
    data: data,
  };
};
