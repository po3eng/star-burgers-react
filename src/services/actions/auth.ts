import api from "../../utils/api";
import { showPreloader, hidePreloader } from "./preloader";
import { TResetPassword } from "../../utils/api";
import { AppDispatch, AppThunk } from "../..";
import { TServerResponse } from "../../utils/request";
import {
  GET_AUTH_REQUEST,
  GET_AUTH_FAILURE,
  GET_AUTH_SUCCESS,
  GET_FORGOT_FAILURE,
  GET_FORGOT_SUCCESS,
  GET_FORGOT_REQUEST,
  GET_LOGOUT_FAILURE,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_REFRESH_TOKEN_FAILURE,
  GET_REFRESH_TOKEN_REQUEST,
  GET_REFRESH_TOKEN_SUCCESS,
  GET_REGISTER_FAILURE,
  GET_REGISTER_REQUEST,
  GET_REGISTER_SUCCESS,
  GET_RESET_FAILURE,
  GET_RESET_REQUEST,
  GET_RESET_SUCCESS,
  GET_UPDATE_FAILURE,
  GET_UPDATE_REQUEST,
  GET_UPDATE_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CLEAR_USER,
} from "../constants/auth";

export type TUser = {
  name?: string;
  email?: string;
  password?: string;
};

export type TNullPassword = {
  email: string;
  token?: string;
};

export type TLoginResponse = TServerResponse<{
  accessToken: string;
  refreshToken: string;
  user: TUser;
}>;
export type TUserForm = TUser & { token?: string };

export interface IGetAuthRequest {
  readonly type: typeof GET_AUTH_REQUEST;
}
export interface IGetAuthFailure {
  readonly type: typeof GET_AUTH_FAILURE;
}
export interface IGetAuthSuccess {
  readonly type: typeof GET_AUTH_SUCCESS;
  readonly data: TLoginResponse;
}
export interface IGetForgotSuccess {
  readonly type: typeof GET_FORGOT_SUCCESS;
}
export interface IGetForgotRequest {
  readonly type: typeof GET_FORGOT_REQUEST;
}
export interface IGetForgotFailure {
  readonly type: typeof GET_FORGOT_FAILURE;
}
export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}
export interface IGetUserFailure {
  readonly type: typeof GET_USER_FAILURE;
}
export interface IGetResetRequest {
  readonly type: typeof GET_RESET_REQUEST;
}
export interface IGetResetSuccess {
  readonly type: typeof GET_RESET_SUCCESS;
}
export interface IGetResetFailure {
  readonly type: typeof GET_RESET_FAILURE;
}
export interface IGetRegisterRequest {
  readonly type: typeof GET_REGISTER_REQUEST;
}
export interface IGetRegisterSuccess {
  readonly type: typeof GET_REGISTER_SUCCESS;
}
export interface IGetRegisterFailure {
  readonly type: typeof GET_REGISTER_FAILURE;
}
export interface IGetUpdateRequest {
  readonly type: typeof GET_UPDATE_REQUEST;
}

export interface IGetUpdateSuccess {
  readonly type: typeof GET_UPDATE_SUCCESS;
  readonly user: TUser;
}
export interface IGetUpdateFailure {
  readonly type: typeof GET_UPDATE_FAILURE;
}
export interface IGetLogoutRequest {
  readonly type: typeof GET_LOGOUT_REQUEST;
}
export interface IGetLogoutSuccess {
  readonly type: typeof GET_LOGOUT_SUCCESS;
}
export interface IGetLogoutFailure {
  readonly type: typeof GET_LOGOUT_FAILURE;
}
export interface IGetRefreshTokenRequest {
  readonly type: typeof GET_REFRESH_TOKEN_REQUEST;
}
export interface IGetRefreshTokenFailure {
  readonly type: typeof GET_REFRESH_TOKEN_FAILURE;
}
export interface IGetRefreshTokenSuccess {
  readonly type: typeof GET_REFRESH_TOKEN_SUCCESS;
}
export interface IClearUser {
  readonly type: typeof CLEAR_USER;
}

export type TAuthActions =
  | IGetAuthRequest
  | IGetAuthFailure
  | IGetAuthSuccess
  | IGetForgotRequest
  | IGetForgotSuccess
  | IGetForgotFailure
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailure
  | IGetResetRequest
  | IGetResetSuccess
  | IGetResetFailure
  | IGetRegisterRequest
  | IGetRegisterSuccess
  | IGetRegisterFailure
  | IGetUpdateRequest
  | IGetUpdateSuccess
  | IGetUpdateFailure
  | IGetLogoutRequest
  | IGetLogoutSuccess
  | IGetLogoutFailure
  | IGetRefreshTokenRequest
  | IGetRefreshTokenFailure
  | IGetRefreshTokenSuccess
  | IClearUser;

export const getUserRequest = (): IGetUserRequest => ({ type: GET_USER_REQUEST });
export const getUserSucces = (user: TUser): IGetUserSuccess => ({ type: GET_USER_SUCCESS, user });
export const getUserFailure = (): IGetUserFailure => ({ type: GET_USER_FAILURE });

export const getRegisterRequest = (): IGetRegisterRequest => ({ type: GET_REGISTER_REQUEST });
export const getRegisterSuccess = (): IGetRegisterSuccess => ({ type: GET_REGISTER_SUCCESS });
export const getRegisterFailure = (): IGetRegisterFailure => ({ type: GET_REGISTER_FAILURE });

export const getUpdateRequest = (): IGetUpdateRequest => ({ type: GET_UPDATE_REQUEST });
export const getUpdateSuccess = (user: TUser): IGetUpdateSuccess => ({ type: GET_UPDATE_SUCCESS, user });
export const getUpdateFailure = (): IGetUpdateFailure => ({ type: GET_UPDATE_FAILURE });

export const getAuthRequest = (): IGetAuthRequest => ({ type: GET_AUTH_REQUEST });
export const getAuthFailure = (): IGetAuthFailure => ({ type: GET_AUTH_FAILURE });
export const getAuthSucces = (data: TLoginResponse): IGetAuthSuccess => ({ type: GET_AUTH_SUCCESS, data });

// TODO: проверить редьюсеры!!!

export const getForgotRequest = (): IGetForgotRequest => ({ type: GET_FORGOT_REQUEST });
export const getForgotSucces = (): IGetForgotSuccess => ({ type: GET_FORGOT_SUCCESS });
export const getForgotFailure = (): IGetForgotFailure => ({ type: GET_FORGOT_FAILURE });

export const getLogoutRequest = (): IGetLogoutRequest => ({ type: GET_LOGOUT_REQUEST });
export const getLogoutSuccess = (): IGetLogoutSuccess => ({ type: GET_LOGOUT_SUCCESS });
export const getLogoutFailure = (): IGetLogoutFailure => ({ type: GET_LOGOUT_FAILURE });

export const getResetRequest = (): IGetResetRequest => ({ type: GET_RESET_REQUEST });
export const getResetSuccess = (): IGetResetSuccess => ({ type: GET_RESET_SUCCESS });
export const getResetFailure = (): IGetResetFailure => ({ type: GET_RESET_FAILURE });

export const getRefreshTokenRequest = (): IGetRefreshTokenRequest => ({ type: GET_REFRESH_TOKEN_REQUEST });
export const getRefreshTokenFailure = (): IGetRefreshTokenFailure => ({ type: GET_REFRESH_TOKEN_FAILURE });

export const clearUser = (): IClearUser => ({ type: CLEAR_USER });

export const signInThunk: AppThunk = (form: TUserForm) => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(getAuthRequest());
  return api
    .login(form)
    .then(res => {
      res && res.success ? dispatch(getAuthSucces(res)) : dispatch(getAuthFailure());
    })
    .catch(e => dispatch(getAuthFailure()))
    .finally(() => dispatch(hidePreloader()));
};

export const forgotPasswordThunk: AppThunk = (form: TNullPassword) => (dispatch: AppDispatch) => {
  dispatch(showPreloader());
  dispatch(getForgotRequest());
  return api
    .forgotPassword(form)
    .then(res => {
      res && res.success ? dispatch(getForgotSucces()) : dispatch(getForgotFailure());
    })
    .catch(e => dispatch(getForgotFailure()))
    .finally(() => dispatch(hidePreloader()));
};

export const resetPasswordThunk: AppThunk = (form: TResetPassword) => (dispatch: AppDispatch) => {
  dispatch(getResetRequest());
  return api
    .resetPassword(form)
    .then(res => {
      res && res.success ? dispatch(getResetSuccess()) : dispatch(getResetFailure());
    })
    .catch(e => dispatch(dispatch(getResetFailure())));
};

export const userDataThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getUserRequest());
  return api
    .getUserData()
    .then(res => {
      res && res.success ? dispatch(getUserSucces(res.user)) : dispatch(getLogoutFailure());
    })
    .catch(e => {
      dispatch(getLogoutFailure());
    });
};

export const registerUserThunk: AppThunk = (form: TUser) => (dispatch: AppDispatch) => {
  dispatch(getRegisterRequest());
  return api
    .registrationUser(form)
    .then(res => {
      res && res.success ? dispatch(getAuthSucces(res)) : dispatch(getRegisterRequest());
    })
    .catch(e => dispatch(getRegisterFailure()));
};

export const updateUserDataThunk: AppThunk = (form: TUser) => (dispatch: AppDispatch) => {
  dispatch(getUpdateRequest());
  return api
    .upadateUserData(form)
    .then(res => {
      res && res.success ? dispatch(getUpdateSuccess(res.user)) : dispatch(getUpdateFailure());
    })
    .catch(e => dispatch(getUpdateFailure()));
};

export const logoutThunk: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(getLogoutRequest());
  return api
    .logout()
    .then(res => {
      if (res && res.success) {
        dispatch(getLogoutSuccess());
        dispatch(clearUser());
      }
    })
    .catch(e => dispatch(getLogoutFailure()));
};
