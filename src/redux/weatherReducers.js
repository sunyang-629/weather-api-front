// import { combineReducers } from "redux";

const initialState = {
  limit: 5,
  forecasts: [],
  current: {},
  cityName: "",
  isLoading: false,
  error:null
};

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIMIT":
      return {
        ...state,
        limit: action.limit
      };
    case "FETCH_DATA":
      console.log("fetch");
      return {
        ...state,
        isLoading: true,
        error:null
      }
    case "FETCH_DATA_SUCCESS":
      console.log('success');
        const forecasts = action.data.forecast.slice(0, 10);
        const current = action.data.current;
        const cityName = action.data.city.name;
      return {
        ...state,
        isLoading:false,
        forecasts,
        current,
        cityName
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        error: action.error,
        isLoading:false
      }

    default:
      return state;
  }
};

export default forecast;

// export default combineReducers({ forecast });

//forecast (state name):forecast (export )
