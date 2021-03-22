import { AxiosPromise } from "axios";

import {
  GOOGLE_MAPS_API_BASE_URL,
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_GEOCODE_ENDPOINT,
} from "constants/api";
import { GeoAPIResponse } from "types/types";

import { HttpClient } from "./HttpClient";

class GoogleMapAPI extends HttpClient {
  constructor() {
    super(GOOGLE_MAPS_API_BASE_URL);
  }

  getGeocodeData(lat: number, lon: number): AxiosPromise<GeoAPIResponse> {
    return this.instance.get(GOOGLE_MAPS_GEOCODE_ENDPOINT, {
      params: {
        key: GOOGLE_MAPS_API_KEY,
        address: `${lat},${lon}`,
      },
    });
  }
}

export default new GoogleMapAPI();
