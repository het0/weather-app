import { AxiosError } from "axios";

import { WEATHER_TYPE } from "@constants/weather_type";
import {
  LOAD_WEATHER_DATA,
  START_WEATHER_TIMER,
  RETRY,
  LOAD_GEO_DATA,
} from "@constants/actions";

export interface WeatherContext {
  name: string;
  icon: string;
  temp: number;
  hum: number;
  wind: number;
  date: Date;
  type: WEATHER_TYPE;
  error: AxiosError;
}

export type WeatherEvents =
  | {
      type: typeof LOAD_WEATHER_DATA;
      lat?: number;
      lon?: number;
      name?: string;
    }
  | {
      type: typeof RETRY;
    }
  | {
      type: typeof START_WEATHER_TIMER;
    };

export interface GeoContext {
  geoName: string;
  error: AxiosError;
}

export interface WeatherAPIResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
}

export type GeoEvents =
  | {
      type: typeof LOAD_GEO_DATA;
      lat: number;
      lon: number;
    }
  | {
      type: typeof RETRY;
    };

export interface GeoStateSchema {
  states: {
    idle: {};
    loading: {};
    loaded: {};
    failure: {};
  };
}
export interface GeoAPIResponse {
  results: [
    {
      address_components: {
        long_name: string;
        short_name: string;
        types: string[];
      }[];
      formatted_address: string;
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
        location_type: string;
        viewport: {
          northeast: {
            lat: number;
            lng: number;
          };
          southwest: {
            lat: number;
            lng: number;
          };
        };
      };
      place_id: string;
      types: string[];
    }
  ];
  status: string;
}
