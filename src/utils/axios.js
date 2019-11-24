import axios from "axios";

export const getWeatherFor = cityName => {
  const url = `https://jr-weather-api-sunyang.herokuapp.com/api/weather?city=${cityName}&cc=au `;
  return axios(url).then(res => res.data.data);
};
