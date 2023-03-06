import api from "../../utils/api";
import { showPreloader, hidePreloader } from "./preloader";
import { TResetPassword } from "../../utils/api";
export type TUser = {
  name?: string;
  email?: string;
  password?: string;
};
export type TNullPassword = {
  email: string;
  token?: string;
};

export const getAuthRequest = () => ({ type: "GET_AUTH_REQUEST" } as const);
export const getAuthSucces = (data: TUser) =>
  ({ type: "GET_AUTH_SUCCES", data: data } as const);
export const getAuthFailure = () => ({ type: "GET_AUTH_FAILURE" } as const);

export const getForgotRequest = () => ({ type: "GET_FORGOT_REQUEST" } as const);
export const getForgotSucces = () => ({ type: "GET_FORGOT_SUCCES" } as const);
export const getForgotFailure = () => ({ type: "GET_FORGOT_FAILURE" } as const);

export const getUserRequest = () => ({ type: "GET_USER_REQUEST" } as const);
export const getUserSucces = (user: TUser) =>
  ({ type: "GET_USER_SUCCES", user: user } as const);
export const getUserFailure = () => ({ type: "GET_USER_FAILURE" } as const);

export const getResetRequest = () => ({ type: "GET_RESET_REQUEST" } as const);
export const getResetSucces = () => ({ type: "GET_RESET_SUCCES" } as const);
export const getResetFailure = () => ({ type: "GET_RESET_FAILURE" } as const);

export const getRegisterRequest = () =>
  ({ type: "GET_REGISTER_REQUEST" } as const);
export const getRegisterSucces = () =>
  ({ type: "GET_REGISTER_SUCCES" } as const);
export const getRegisterFailure = () =>
  ({ type: "GET_REGISTER_FAILURE" } as const);

export const getUpdateRequest = () => ({ type: "GET_UPDATE_REQUEST" } as const);
export const getUpdateSucces = (user: TUser) =>
  ({ type: "GET_UPDATE_SUCCES", user: user } as const);
export const getUpdateFailure = () => ({ type: "GET_UPDATE_FAILURE" } as const);

export const getLogoutRequest = () => ({ type: "GET_LOGOUT_REQUEST" } as const);
export const getLogoutSucces = () => ({ type: "GET_LOGOUT_SUCCES" } as const);
export const getLogoutFailure = () => ({ type: "GET_LOGOUT_FAILURE" } as const);

export const getRefreshTokenRequest = () =>
  ({ type: "GET_REFRESH_TOKEN_REQUEST" } as const);
// export const getRefreshTokenSucces = (data) =>
//   ({ type: "GET_REFRESH_TOKEN_SUCCES", data: data } as const);
export const getRefreshTokenFailure = () =>
  ({ type: "GET_REFRESH_TOKEN_FAILURE" } as const);

export const clearUser = () => ({ type: "CLEAR_USER" } as const);

export const signIn = (form: TUser) => (dispatch: any) => {
  dispatch(showPreloader());
  dispatch(getAuthRequest());
  api
    .login(form)
    .then((res) => {
      res && res.success
        ? dispatch(getAuthSucces(res.user))
        : dispatch(getAuthFailure());
    })
    .catch((e) => {
      dispatch(getAuthFailure());
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const forgotPassword = (form: TNullPassword) => (dispatch: any) => {
  dispatch(showPreloader());
  dispatch(getForgotRequest());
  return api
    .forgotPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch(getForgotSucces())
        : dispatch(getForgotFailure());
      return res;
    })
    .catch((e) => {
      dispatch(getForgotFailure());
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const resetPassword = (form: TResetPassword) => (dispatch: any) => {
  dispatch(showPreloader());
  dispatch(getResetRequest());
  return api
    .resetPassword(form)
    .then((res) => {
      res && res.success
        ? dispatch(getResetSucces())
        : dispatch(getResetFailure());
      return res;
    })
    .catch((e) => {
      dispatch(dispatch(getResetFailure()));
    })
    .finally(() => {
      dispatch(hidePreloader());
    });
};

export const userData = () => (dispatch: any) => {
  dispatch(getUserRequest());
  api
    .getUserData()
    .then((res) => {
      res && res.success
        ? dispatch(getUserSucces(res.user))
        : dispatch(getLogoutFailure());
    })
    .catch((e) => {
      dispatch(getLogoutFailure());
    });
};
export const registerUser = (form: TUser) => (dispatch: any) => {
  dispatch(getRegisterRequest());
  api
    .registrationUser(form)
    .then((res) => {
      res && res.success && dispatch(getUserSucces(res.user));
    })
    .catch((e) => {
      dispatch(getRegisterFailure);
    });
};

export const updateUserData = (form: TUser) => (dispatch: any) => {
  dispatch(getUpdateRequest());
  api
    .upadateUserData(form)
    .then((res) => {
      res && res.success
        ? dispatch(getUpdateSucces(res.user))
        : dispatch(getUpdateFailure());
    })
    .catch((e) => {
      dispatch(getUpdateFailure());
    });
};

export const logout = () => (dispatch: any) => {
  dispatch(getLogoutRequest());
  api
    .logout()
    .then((res) => {
      if (res && res.success) {
        dispatch(getLogoutSucces());
        dispatch(clearUser());
      }
    })
    .catch((e) => {
      dispatch(getLogoutFailure());
    });
};
