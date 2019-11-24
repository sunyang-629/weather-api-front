// import { combineReducers } from "redux";

const initialState = {
  limit: 5,
  forecasts: [],
  current: {},
  cityName: "",
};

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIMIT":
      return {
        ...state,
        limit: action.limit
      };
    case "FETCH_DATA_SUCCESS":
        const forecasts = action.data.forecast.slice(0, 10);
        const current = action.data.current;
        const cityName = action.data.city.name;
      return {
        ...state,
        forecasts,
        current,
        cityName
      };  
    default:
      return state;
  }
};

export default forecast;

// export default combineReducers({ forecast });

//forecast (state name):forecast (export )
