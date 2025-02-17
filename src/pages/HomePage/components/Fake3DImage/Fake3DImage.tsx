import React, { useEffect } from "react";

import { WEATHER_TYPE } from "@constants/weather_type";

import RainImage from "@assets/img/rainy.jpg";
import RainImageMap from "@assets/img/rainy_map.jpg";
import SnowImg from "@assets/img/snow.jpg";
import SnowImgMap from "@assets/img/snow_map.jpg";
import SunnyImg from "@assets/img/sunny.jpg";
import SunnyImgMap from "@assets/img/sunny_map.jpg";
import ThunderImg from "@assets/img/thunder.jpg";
import ThunderImgMap from "@assets/img/thunder_map.jpg";

import { Fake3DContainer } from "./Fake3DImage.styled";
import { SceneHandler } from "./SceneHandler";

const IMG_MAP: { [key: string]: { original: string; colorMap: string } } = {
  [WEATHER_TYPE.SUN]: {
    original: SunnyImg,
    colorMap: SunnyImgMap,
  },
  [WEATHER_TYPE.RAIN]: {
    original: RainImage,
    colorMap: RainImageMap,
  },
  [WEATHER_TYPE.THUNDER]: {
    original: ThunderImg,
    colorMap: ThunderImgMap,
  },
  [WEATHER_TYPE.CLOUDY]: {
    original: SunnyImg,
    colorMap: SunnyImgMap,
  },
  [WEATHER_TYPE.SNOW]: {
    original: SnowImg,
    colorMap: SnowImgMap,
  },
};

type Props = Readonly<{
  type: WEATHER_TYPE;
  icon: string;
}>;

const Fake3DImageComp = ({ type, icon }: Props) => {
  useEffect(() => {
    if (type) {
      // new SceneHandler(IMG_MAP[type].original, IMG_MAP[type].colorMap);
    }
  }, [type]);

  if (!icon) {
    return null;
  }

  const isDay = icon[2] === "d";

  return (
    <Fake3DContainer color={icon.substring(0, 2)} isDay={isDay}>
      <div id="gl" />
    </Fake3DContainer>
  );
};

const Fake3DImage = React.memo(Fake3DImageComp);

export { Fake3DImage };
