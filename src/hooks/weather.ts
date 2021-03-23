import { useEffect } from "react";
import { useMachine } from "@xstate/react";

import {
  LOAD_GEO_DATA,
  LOAD_WEATHER_DATA,
  START_WEATHER_TIMER,
} from "@constants/actions";
import { getCityFromQueryParams } from "@helpers/helpers";
import { weatherDataMachine } from "@machine/weatherDataMachine";
import { geolocationMachine } from "@machine/geolocationMachine";
import { useCookies } from "react-cookie";

const useWeather = () => {
  const [cookies, _] = useCookies(["weather"]);
  const [weather, sendWeather] = useMachine(
    weatherDataMachine(cookies.weather)
  );
  const [geolocation, sendGeo] = useMachine(geolocationMachine);

  const queryName = getCityFromQueryParams();
  const cookiesName = cookies.weather ? cookies.weather.name : false;
  const geoName = geolocation.context.geoName;

  useEffect(() => {
    if (navigator.geolocation && !queryName && !cookiesName) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          sendGeo(LOAD_GEO_DATA, {
            lat: coords.latitude,
            lon: coords.longitude,
          });
        },
        error => {
          console.log(error);
        }
      );
    } else if (cookiesName) {
      sendWeather(START_WEATHER_TIMER);
    }
  }, []);

  useEffect(() => {
    if (queryName || geoName) {
      sendWeather(LOAD_WEATHER_DATA, { name: queryName || geoName });
    }
  }, [geoName]);

  return weather.context;
};

export { useWeather };
