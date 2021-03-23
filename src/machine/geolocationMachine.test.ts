import axios from "axios";
import { interpret } from "xstate";

import { GeoAPIMockedResponse } from "@constants/mock_data";
import { LOAD_GEO_DATA } from "@constants/actions";

import { geolocationMachine } from "./geolocationMachine";

jest.mock("axios");

it('should eventually reach "loaded" state', done => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  const mockFetchMachine = geolocationMachine.withConfig({
    services: {
      //@ts-ignore
      getGeocodeData: (_, event) => {
        return mockedAxios.get.mockImplementationOnce(() =>
          Promise.resolve({ data: GeoAPIMockedResponse })
        );
      },
    },
  });

  const geoService = interpret(mockFetchMachine).onTransition(state => {
    if (state.matches("loaded")) {
      // assert that effects were executed
      expect(state.context.geoName).toBe("Kyiv");
      done();
    }
  });

  geoService.start();

  geoService.send(LOAD_GEO_DATA, {
    lat: 50.392585499999996,
    lon: 30.6156049,
  });
});
