const CHANGE_LIMIT = "CHANGE_LIMIT";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const changeLimitAction = limit => ({
  limit,
  type: CHANGE_LIMIT
});

export const fetchDataSuccess = data => ({
  data,
  type: FETCH_DATA_SUCCESS
})