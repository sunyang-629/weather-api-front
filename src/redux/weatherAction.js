import { getWeatherFor } from "./../utils/axios";

const CHANGE_LIMIT = "CHANGE_LIMIT";
const FETCH_DATA = "FETCH_DATA";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const changeLimitAction = limit => ({
  limit,
  type: CHANGE_LIMIT
});

export const fetchData = () => ({
  type: FETCH_DATA
})

export const fetchDataSuccess = data => ({
  data,
  type: FETCH_DATA_SUCCESS
})

export const fetchDataFailure = error => ({
  error,
  type: FETCH_DATA_FAILURE
})

export const fetchDataThunkAction = cityName => dispatch => {
  dispatch(fetchData());
  getWeatherFor(cityName)
    .then(data => dispatch(fetchDataSuccess(data)))
    .catch(error => dispatch(fetchDataFailure(error)));
 };