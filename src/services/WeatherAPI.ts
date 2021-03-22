import { AxiosPromise } from "axios";

import {
  WEATHER_API_BASE_URL,
  WEATHER_API_KEY,
  WEATHER_DATA_ENDPOINT,
} from "constants/api";
import { WeatherAPIResponse } from "types/types";

import { HttpClient } from "./HttpClient";

class WeatherAPI extends HttpClient {
  private defaultParams = {
    appid: WEATHER_API_KEY,
    units: "metric",
  };

  constructor() {
    super(WEATHER_API_BASE_URL);
  }

  getWeatherByCityName(name: string): AxiosPromise<WeatherAPIResponse> {
    return this.instance.get(WEATHER_DATA_ENDPOINT, {
      params: {
        ...this.defaultParams,
        q: name,
      },
    });
  }

  getWeatherByCoords(
    lat: number,
    lon: number
  ): AxiosPromise<WeatherAPIResponse> {
    return this.instance.get(WEATHER_DATA_ENDPOINT, {
      params: {
        ...this.defaultParams,
        lat,
        lon,
      },
    });
  }
}

export default new WeatherAPI();
