import * as types from "../constants/auth";
import { authReducer } from "./auth";
("../services/reducers/auth");
import { initialState as state } from "./auth";
const user = {
  name: "name",
  password: "password",
  email: "email",
};

const data = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
  success: true,
  user: user,
};

describe("auth reducer", () => {
  it("should return this initial state", () => {
    expect(authReducer(undefined, {})).toEqual(state);
  });

  it("should return state with authRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_AUTH_REQUEST,
      }),
    ).toEqual({ ...state, authRequest: true });
  });

  it("should return state with authSucces = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_AUTH_SUCCESS,
        data,
      }),
    ).toEqual({ ...state, authSucces: true, user });
  });

  it("should return state with authFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_AUTH_FAILURE,
      }),
    ).toEqual({ ...state, authFailed: true });
  });

  it("should return state with forgotRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_FORGOT_REQUEST,
      }),
    ).toEqual({ ...state, forgotRequest: true });
  });

  it("should return state with forgotSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_FORGOT_SUCCESS,
      }),
    ).toEqual({ ...state, forgotSuccess: true });
  });
  it("should return state with forgotFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_FORGOT_FAILURE,
        data,
      }),
    ).toEqual({ ...state, forgotFailed: true });
  });

  it("should return state with resetRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_RESET_REQUEST,
      }),
    ).toEqual({ ...state, resetRequest: true });
  });

  it("should return state with resetFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_RESET_FAILURE,
      }),
    ).toEqual({ ...state, resetFailed: true });
  });
  it("should return state with resetSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_RESET_SUCCESS,
      }),
    ).toEqual({ ...state, resetSuccess: true });
  });

  it("should return state with updateRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_UPDATE_REQUEST,
      }),
    ).toEqual({ ...state, updateRequest: true });
  });

  it("should return state with updateFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_UPDATE_FAILURE,
      }),
    ).toEqual({ ...state, updateFailed: true });
  });
  it("should return state with updateSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_UPDATE_SUCCESS,
        user,
      }),
    ).toEqual({ ...state, updateSuccess: true, user });
  });

  it("should return state with registerRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REGISTER_REQUEST,
      }),
    ).toEqual({ ...state, registerRequest: true });
  });

  it("should return state with registerFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REGISTER_FAILURE,
      }),
    ).toEqual({ ...state, registerFailed: true });
  });
  it("should return state with registerSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REGISTER_SUCCESS,
      }),
    ).toEqual({ ...state, registerSuccess: true });
  });

  it("should return state with logoutRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_LOGOUT_REQUEST,
      }),
    ).toEqual({ ...state, logoutRequest: true });
  });

  it("should return state with logoutFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_LOGOUT_FAILURE,
      }),
    ).toEqual({ ...state, logoutFailed: true });
  });
  it("should return state with logoutSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_LOGOUT_SUCCESS,
      }),
    ).toEqual({ ...state, logoutSuccess: true });
  });

  // refreshTokenRequest: false,
  // refreshTokenFailed: false,

  it("should return state with userRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_USER_REQUEST,
      }),
    ).toEqual({ ...state, userRequest: true });
  });

  it("should return state with userFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_USER_FAILURE,
      }),
    ).toEqual({ ...state, userFailed: true });
  });

  it("should return state with GET_USER_SUCCESS  true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_USER_SUCCESS,
        user,
      }),
    ).toEqual({ ...state, userSuccess: true, user });
  });

  it("should return state with refreshTokenRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REFRESH_TOKEN_REQUEST,
      }),
    ).toEqual({ ...state, refreshTokenRequest: true });
  });

  it("should return state with refreshTokenFailed = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REFRESH_TOKEN_FAILURE,
      }),
    ).toEqual({ ...state, refreshTokenFailed: true });
  });

  it("should return state with refreshTokenSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_REFRESH_TOKEN_SUCCESS,
      }),
    ).toEqual({ ...state, refreshTokenSuccess: true });
  });
});
