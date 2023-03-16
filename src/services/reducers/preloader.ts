import { SHOW_PRELOADER, HIDE_PRELOADER } from "../constants/preloader";
import { TPreloaderActions } from "../actions/preloader";

type TPreloaderState = {
  preloaderShow: boolean;
};

const initialState: TPreloaderState = {
  preloaderShow: false,
};

export const preloaderReducer = (state = initialState, action: TPreloaderActions): TPreloaderState => {
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
