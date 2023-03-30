import * as types from "../constants/preloader";
import { preloaderReducer } from "./preloader";

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
