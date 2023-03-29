import * as actions from "../services/actions/auth";
import * as types from "../services/constants/auth";
import { authReducer } from "../services/reducers/auth";
("../services/reducers/auth");

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
describe("Action creators of auth", () => {
  const expectedAction = {
    type: types.GET_AUTH_SUCCESS,
    data: data,
  };
  expect(actions.getAuthSucces(data)).toEqual(expectedAction);
});

it("Get user success", () => {
  const expectedAction = {
    type: types.GET_USER_SUCCESS,
    user: user,
  };
  expect(actions.getUserSucces(user)).toEqual(expectedAction);
});

it("Get GET_UPDATE_SUCCESS ", () => {
  const expectedAction = {
    type: types.GET_UPDATE_SUCCESS,
    user,
  };
  expect(actions.getUpdateSuccess(user)).toEqual(expectedAction);
});

const state = {
  user: null,
  authRequest: false,
  authSucces: false,
  authFailed: false,

  forgotRequest: false,
  forgotSuccess: false,
  forgotFailed: false,

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
        data,
      }),
    ).toEqual({ ...state, authFailed: true });
  });

  it("should return state with forgotRequest = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_FORGOT_REQUEST,
        data,
      }),
    ).toEqual({ ...state, forgotRequest: true });
  });

  it("should return state with forgotSuccess = true", () => {
    expect(
      authReducer(undefined, {
        type: types.GET_FORGOT_SUCCESS,
        data,
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
});
