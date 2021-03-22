import { WEATHER_TYPE } from "constants/weather_type";
import { AxiosError } from "axios";

export interface WeatherContext {
  name: string;
  temp: number;
  hum: number;
  wind: number;
  date: Date;
  type: WEATHER_TYPE;
  error: AxiosError;
}

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
