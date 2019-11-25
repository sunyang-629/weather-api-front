import { getWeatherFor } from "./../utils/axios";
import {fetchData, fetchDataSuccess, fetchDataFailure} from "./weatherAction"

const TOGGLE_UNIT = "TOGGLE_UNIT";
const SET_SEARCH_CITY_NAME = "SET_SEARCH_CITY_NAME"



export const toggleUnitAction = () => ({
    type: TOGGLE_UNIT
})
  
export const setSearchCityName = city => ({
    type: SET_SEARCH_CITY_NAME,
    city
})

  
export const fetchDataThunkAction = cityName => dispatch => {
dispatch(fetchData());
getWeatherFor(cityName)
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(error => dispatch(fetchDataFailure(error)));
};