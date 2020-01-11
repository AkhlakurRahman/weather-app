import * as actionTypes from './actionTypes';
import weatherAPI from '../apis/weatherAPI';

export const fetchWeather = city => {
  return async dispatch => {
    const response = await weatherAPI.get(
      `forecast?appid=${process.env.REACT_APP_OWM_API_KEY}&q=${city},us`
    );

    dispatch({ type: actionTypes.FETCH_WEATHER, payload: response.data });
  };
};
