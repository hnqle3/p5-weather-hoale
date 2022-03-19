import _ from 'axios'

const API_KEY = "13cba0f98bd190f549ee25674a05fd7a"
//interpolated key into url
 const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

 export const FETCH_WEATHER="FETCH_WEATHER"

 export function fetchWeather(city){
     const url=`${ROOT_URL}&q=${city},us`

     const request = _.get(url)

     console.log('Request (pre middleware):', request);
     return{
         type: FETCH_WEATHER,
         payload: request
     }
 }

//  import axios from 'axios';
// const API_KEY = "342834219a529fa93daa7974902e8cc4";
// const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// export const FETCH_WEATHER = 'FETCH_WEATHER';
// export function fetchWeather(city){
//  const url = `${ROOT_URL}&q=${city},us`;
//  // axios.get(url) returns a promise
//  const request = axios.get(url);
//  console.log('Request (pre middleware):', request);
//  return {
//  type: FETCH_WEATHER,
//  payload: request
//  }
// }