import React from "react";

import { WEATHER_TYPE } from "@constants/weather_type";
import SunnyIcon from "@assets/wi-day-sunny.svg";
import SnowIcon from "@assets/wi-day-snow.svg";
import RainIcon from "@assets/wi-day-rain.svg";
import ThunderIcon from "@assets/wi-day-thunderstorm.svg";
import CloudyIcon from "@assets/wi-cloudy.svg";

import { IconContainer, Container, Text } from "./Icon.styled";

type Props = Readonly<{
  type: WEATHER_TYPE;
}>;

const ICONS_MAP = {
  [WEATHER_TYPE.CLOUDY]: CloudyIcon,
  [WEATHER_TYPE.SUN]: SunnyIcon,
  [WEATHER_TYPE.THUNDER]: ThunderIcon,
  [WEATHER_TYPE.RAIN]: RainIcon,
  [WEATHER_TYPE.SNOW]: SnowIcon,
};

const ICON_TEXT = {
  [WEATHER_TYPE.CLOUDY]: "Cloudy",
  [WEATHER_TYPE.SUN]: "Sunny",
  [WEATHER_TYPE.THUNDER]: "Thunder",
  [WEATHER_TYPE.RAIN]: "Rain",
  [WEATHER_TYPE.SNOW]: "Snow",
};

const IconComp = ({ type }: Props) => {
  return (
    <Container>
      <IconContainer svg={ICONS_MAP[type]} />
      <Text>{ICON_TEXT[type]}</Text>
    </Container>
  );
};

const Icon = React.memo(IconComp);

export { Props, Icon };
