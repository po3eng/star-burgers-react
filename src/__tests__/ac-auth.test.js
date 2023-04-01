import * as actions from "../services/actions/auth";
import * as types from "../services/constants/auth";

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
