import * as actions from "./preloader";
import * as types from "../constants/preloader";

describe("Action creators of preloader", () => {
  it("Show modal", () => {
    // Эталонный экшен
    const expectedAction = {
      type: types.SHOW_PRELOADER,
    };
    expect(actions.showPreloader()).toEqual(expectedAction);
  });
  it("Hide modal", () => {
    // Эталонный экшен
    const expectedAction = {
      type: types.HIDE_PRELOADER,
    };
    expect(actions.hidePreloader()).toEqual(expectedAction);
  });
});
