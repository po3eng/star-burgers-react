const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  burgerIngredients: [],
  currentIngredient: {},
  order: {},
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
  }
};
