// import { combineReducers } from "redux";

const initialState = {
  limit: 5,
  forecasts: [],
  current: {},
  cityName: "",
  isLoading: false,
  error: null,
  unit: "C",
  input:""
};

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LIMIT":
      return {
        ...state,
        limit: action.limit
      };
    case "FETCH_DATA":
      return {
        ...state,
        isLoading: true,
        error:null
      }
    case "FETCH_DATA_SUCCESS":
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
    case "TOGGLE_UNIT":
      const unit = state.unit === "C" ? "F" : "C"
      return {
        ...state,
        unit
      }
    case "SET_SEARCH_CITY_NAME":
      return {
        ...state,
        input:action.city
      }
    default:
      return state;
  }
};

export default forecast;

// export default combineReducers({ forecast });

//forecast (state name):forecast (export )
