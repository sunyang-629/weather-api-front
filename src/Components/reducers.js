import { combineReducers } from "redux";

const initialState = {
  limit: 5
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIMIT":
      return {
        ...state,
        limit: action.limit
      };
    default:
      return state;
  }
};

export default combineReducers({ forecast });

//forecast (state name):forecast (export )
