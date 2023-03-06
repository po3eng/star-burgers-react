import { SHOW_PRELOADER, HIDE_PRELOADER } from "../actions/preloader";

const initialState = {
  preloaderShow: false,
};

export const preloaderReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case SHOW_PRELOADER: {
      return {
        ...state,
        preloaderShow: true,
      };
    }
    case HIDE_PRELOADER: {
      return {
        ...state,
        preloaderShow: false,
      };
    }
    default: {
      return state;
    }
  }
};
