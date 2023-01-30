import { SET_ORDER, GET_ORDER_REQUEST, CLEAR_ORDER } from "../actions/order";
const initialState = {
  order: { number: "00000" },
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }

    case SET_ORDER: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false,
      };
    }

    case CLEAR_ORDER: {
      return { ...state, order: { number: "00000" } };
    }
    default: {
      return state;
    }
  }
};
