import * as actions from "./auth";
import * as types from "../constants/auth";


describe("Action creators of auth", () => {
  const user: actions.TUser = {
    name: "name",
    password: "password",
    email: "email",
  };

  it("Get auth faiure", () => {
    const expectedAction = {
      type: types.GET_AUTH_FAILURE,
    };
    expect(actions.getAuthFailure()).toEqual(expectedAction);
  });
  it("Get auth request", () => {
    const expectedAction = {
      type: types.GET_AUTH_REQUEST,
    };
    expect(actions.getAuthRequest()).toEqual(expectedAction);
  });

  it("Get auth success", () => {
    const data: actions.TLoginResponse = {
      accessToken: "accessToken",
      refreshToken: "refreshToken",
      success: true,
      user: user,
    };

    const expectedAction = {
      type: types.GET_AUTH_SUCCESS,
      data: data,
    };
    expect(actions.getAuthSucces(data)).toEqual(expectedAction);
  });

  it("Get forgot faiure", () => {
    const expectedAction = {
      type: types.GET_FORGOT_FAILURE,
    };
    expect(actions.getForgotFailure()).toEqual(expectedAction);
  });

  it("Get forgot request", () => {
    const expectedAction = {
      type: types.GET_FORGOT_REQUEST,
    };
    expect(actions.getForgotRequest()).toEqual(expectedAction);
  });
  it("Get forgot success", () => {
    const expectedAction = {
      type: types.GET_FORGOT_SUCCESS,
    };
    expect(actions.getForgotSucces()).toEqual(expectedAction);
  });

  it("Get user faiure", () => {
    const expectedAction = {
      type: types.GET_USER_FAILURE,
    };
    expect(actions.getUserFailure()).toEqual(expectedAction);
  });
  it("Get user request", () => {
    const expectedAction = {
      type: types.GET_USER_REQUEST,
    };
    expect(actions.getUserRequest()).toEqual(expectedAction);
  });
  it("Get user success", () => {
    const expectedAction = {
      type: types.GET_USER_SUCCESS,
      user: user,
    };
    expect(actions.getUserSucces(user)).toEqual(expectedAction);
  });

  it("Get reset faiure", () => {
    const expectedAction = {
      type: types.GET_RESET_FAILURE,
    };
    expect(actions.getResetFailure()).toEqual(expectedAction);
  });
  it("Get reset request", () => {
    const expectedAction = {
      type: types.GET_RESET_REQUEST,
    };
    expect(actions.getResetRequest()).toEqual(expectedAction);
  });
  it("Get reset success", () => {
    const expectedAction = {
      type: types.GET_RESET_SUCCESS,
    };
    expect(actions.getResetSuccess()).toEqual(expectedAction);
  });

  it("Get register faiure", () => {
    const expectedAction = {
      type: types.GET_REGISTER_FAILURE,
    };
    expect(actions.getRegisterFailure()).toEqual(expectedAction);
  });
  it("Get register request", () => {
    const expectedAction = {
      type: types.GET_REGISTER_REQUEST,
    };
    expect(actions.getRegisterRequest()).toEqual(expectedAction);
  });
  it("Get register success", () => {
    const expectedAction = {
      type: types.GET_REGISTER_SUCCESS,
    };
    expect(actions.getRegisterSuccess()).toEqual(expectedAction);
  });

  it("Get GET_UPDATE_FAILURE", () => {
    const expectedAction = {
      type: types.GET_UPDATE_FAILURE,
    };
    expect(actions.getUpdateFailure()).toEqual(expectedAction);
  });
  it("Get GET_UPDATE_REQUEST", () => {
    const expectedAction = {
      type: types.GET_UPDATE_REQUEST,
    };
    expect(actions.getUpdateRequest()).toEqual(expectedAction);
  });

  it("Get GET_UPDATE_SUCCESS ", () => {
    const expectedAction = {
      type: types.GET_UPDATE_SUCCESS,
      user,
    };
    expect(actions.getUpdateSuccess(user)).toEqual(expectedAction);
  });

  it("Get GET_LOGOUT_FAILURE", () => {
    const expectedAction = {
      type: types.GET_LOGOUT_FAILURE,
    };
    expect(actions.getLogoutFailure()).toEqual(expectedAction);
  });
  it("Get GET_LOGOUT_REQUEST", () => {
    const expectedAction = {
      type: types.GET_LOGOUT_REQUEST,
    };
    expect(actions.getLogoutRequest()).toEqual(expectedAction);
  });

  it("Get GET_UPDATE_SUCCESS ", () => {
    const expectedAction = {
      type: types.GET_LOGOUT_SUCCESS,
    };
    expect(actions.getLogoutSuccess()).toEqual(expectedAction);
  });

  it("Get GET_RESET_FAILURE", () => {
    const expectedAction = {
      type: types.GET_RESET_FAILURE,
    };
    expect(actions.getResetFailure()).toEqual(expectedAction);
  });
  it("Get GET_RESET_REQUEST", () => {
    const expectedAction = {
      type: types.GET_RESET_REQUEST,
    };
    expect(actions.getResetRequest()).toEqual(expectedAction);
  });

  it("Get GET_RESET_SUCCESS ", () => {
    const expectedAction = {
      type: types.GET_RESET_SUCCESS,
    };
    expect(actions.getResetSuccess()).toEqual(expectedAction);
  });

  it("CLEAR_USER ", () => {
    const expectedAction = {
      type: types.CLEAR_USER,
    };
    expect(actions.clearUser()).toEqual(expectedAction);
  });
});
