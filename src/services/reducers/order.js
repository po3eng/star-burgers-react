import {
  SET_ORDER,
  SET_ORDER_REQUEST,
  SET_ORDER_FAILURE,
  SET_ORDER_SUCCES,
} from "../actions/order";

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case SET_ORDER_FAILURE: {
      return {
        ...state,
        order: null,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case SET_ORDER_SUCCES: {
      return {
        ...state,
        order: action.order,
        orderRequest: true,
        orderFailed: false,
      };
    }

    default: {
      return state;
    }
  }
};
