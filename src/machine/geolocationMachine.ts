import { Machine, assign, EventObject } from "xstate";
import { AxiosResponse, AxiosPromise } from "axios";

import { LOAD_GEO_DATA } from "@constants/actions";
import GoogleMapAPI from "@services/GoogleMapAPI";
import { getCityName } from "@helpers/helpers";
import {
  GeoContext,
  GeoAPIResponse,
  GeoEvents,
  GeoStateSchema,
} from "types/types";

export type GeoEvent = EventObject & {
  data: AxiosResponse<GeoAPIResponse>;
};

export const geolocationMachine = Machine<
  GeoContext,
  GeoStateSchema,
  GeoEvents
>(
  {
    id: "geolocation-data",
    initial: "idle",
    context: {
      geoName: null,
      error: null,
    },
    states: {
      idle: {},
      loading: {
        invoke: {
          id: "fetch-geolocation-data",
          src: "getGeocodeData",
          onDone: {
            target: "loaded",
            actions: assign<GeoContext, GeoEvent>((context, { data }) => {
              return {
                geoName: getCityName(data.data),
              };
            }),
          },
          onError: {
            target: "failure",
            actions: assign({ error: (context, event) => event.data }),
          },
        },
      },
      loaded: {
        type: "final",
      },
      failure: {
        on: {
          RETRY: "loading",
        },
      },
    },
    on: {
      [LOAD_GEO_DATA]: {
        target: "loading",
      },
    },
  },
  {
    services: {
      getGeocodeData: (context, event): AxiosPromise<GeoAPIResponse> => {
        if (event.type === LOAD_GEO_DATA) {
          return GoogleMapAPI.getGeocodeData(event.lat, event.lon);
        }
      },
    },
  }
);
