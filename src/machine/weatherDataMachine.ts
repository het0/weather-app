import { Machine, assign, EventObject } from "xstate";
import { AxiosResponse } from "axios";

import { LOAD_WEATHER_DATA, START_WEATHER_TIMER } from "constants/actions";
import { REFRESH_TIME } from "constants/constants";
import { timeDiff, getWeatherType } from "helpers/helpers";
import WeatherAPI from "services/WeatherAPI";
import { LocalStorage } from "services/LocalStorage";
import { WeatherContext, WeatherAPIResponse } from "types/types";

type WeatherEvent = EventObject & {
  data: AxiosResponse<WeatherAPIResponse>;
};

const weatherDataMachine = (ctx: WeatherContext) =>
  Machine<WeatherContext>(
    {
      id: "weather-data",
      initial: "initial",
      context: {
        name: "",
        temp: 0,
        hum: null,
        wind: null,
        date: null,
        type: null,
        error: null,
      },
      states: {
        initial: {},
        idle: {
          after: [
            {
              delay: ctx => {
                return ctx.date
                  ? REFRESH_TIME - timeDiff(new Date(ctx.date), new Date())
                  : 0;
              },
              cond: ctx => Boolean(ctx.date),
              target: "loading",
            },
          ],
        },
        loading: {
          invoke: {
            id: "fetch-weather-data",
            src: (ctx, event) => {
              if (event.lat && event.lon) {
                return WeatherAPI.getWeatherByCoords(event.lat, event.lon);
              }
              return WeatherAPI.getWeatherByCityName(
                event.name ? event.name : ctx.name
              );
            },
            onDone: {
              target: "idle",
              actions: assign<WeatherContext, WeatherEvent>((_, { data }) => {
                const newState = {
                  name: data.data.name,
                  temp: Math.round(data.data.main.temp),
                  hum: data.data.main.humidity,
                  wind: data.data.wind.speed,
                  date: new Date(),
                  type: getWeatherType(data.data.weather[0].main),
                };
                LocalStorage.set("weather", newState);
                return newState;
              }),
            },
            onError: {
              target: "failure",
              actions: assign({ error: (context, event) => event.data }),
            },
          },
        },
        failure: {
          on: {
            RETRY: "loading",
          },
        },
        finish: {
          type: "final",
        },
      },
      on: {
        [LOAD_WEATHER_DATA]: {
          target: "loading",
        },
        [START_WEATHER_TIMER]: {
          target: "idle",
        },
      },
    },
    {},
    ctx
  );

export { weatherDataMachine };
