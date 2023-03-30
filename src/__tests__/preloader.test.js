import * as actions from "../services/actions/preloader";
import * as types from "../services/constants/preloader";
import { preloaderReducer } from "../services/reducers/preloader";

describe("Action creators of preloader", () => {
  it("Show preloader", () => {
    // Эталонный экшен
    const expectedAction = {
      type: types.SHOW_PRELOADER,
    };
    expect(actions.showPreloader()).toEqual(expectedAction);
  });

  it("Hide preloader", () => {
    // Эталонный экшен
    const expectedAction = {
      type: types.HIDE_PRELOADER,
    };
    expect(actions.hidePreloader()).toEqual(expectedAction);
  });
});

describe("preload reducer", () => {
  const state = {
    preloaderShow: false,
  };
  it("should return this initial state", () => {
    expect(preloaderReducer(undefined, {})).toEqual(state);
  });

  it("should return state with HIDE_PRELOADER ", () => {
    expect(
      preloaderReducer(undefined, {
        type: types.HIDE_PRELOADER,
      }),
    ).toEqual({ ...state, preloaderShow: false });
  });

  it("should return state with SHOW_PRELOADER ", () => {
    expect(
      preloaderReducer(undefined, {
        type: types.SHOW_PRELOADER,
      }),
    ).toEqual({ ...state, preloaderShow: true });
  });
});
