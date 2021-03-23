import { WEATHER_TYPE } from "@constants/weather_type";
import { CITY_QUERY_VAR } from "@constants/query_variables";
import { GeoAPIResponse } from "types/types";

const getQueryParams = function (): { [key: string]: string } {
  const params = {};
  if (process.env.BUILD_TARGET !== "client") return params;
  window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (_, key, value) => (params[key] = value)
  );
  return params;
};

export const getCityFromQueryParams = function (): string | false {
  const queryParams = getQueryParams();
  return queryParams[CITY_QUERY_VAR] ? queryParams[CITY_QUERY_VAR] : false;
};

export const timeDiff = function (start: Date, end: Date): number {
  return end.getTime() - start.getTime();
};

export const getCityName = function (data: GeoAPIResponse): string {
  let city = "";
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i].types[0] === "administrative_area_level_1") {
      if (data.results[i] && data.results[i].address_components[1]) {
        city = data.results[i].address_components[1].short_name;
        break;
      }
    }
  }
  return city;
};

export const getDayString = function (): { day: string; month: string } {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();

  return {
    day: days[now.getDay()],
    month: months[now.getMonth()],
  };
};

const WEATHER_TYPE_MAP = {
  Thunderstorm: WEATHER_TYPE.THUNDER,
  Drizzle: WEATHER_TYPE.CLOUDY,
  Rain: WEATHER_TYPE.RAIN,
  Snow: WEATHER_TYPE.SNOW,
  Atmosphere: WEATHER_TYPE.CLOUDY,
  Clear: WEATHER_TYPE.SUN,
  Clouds: WEATHER_TYPE.CLOUDY,
};

export const getWeatherType = function (type: string): WEATHER_TYPE {
  return WEATHER_TYPE_MAP[type];
};
