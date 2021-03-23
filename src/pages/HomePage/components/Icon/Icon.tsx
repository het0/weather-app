import React from "react";

import { WEATHER_TYPE } from "@constants/weather_type";

import { Container, Img, Text } from "./Icon.styled";

type Props = Readonly<{
  type: WEATHER_TYPE;
  icon: string;
}>;

const ICON_TEXT = {
  [WEATHER_TYPE.CLOUDY]: "Cloudy",
  [WEATHER_TYPE.SUN]: "Sunny",
  [WEATHER_TYPE.THUNDER]: "Thunder",
  [WEATHER_TYPE.RAIN]: "Rain",
  [WEATHER_TYPE.SNOW]: "Snow",
};

const IconComp = ({ icon, type }: Props) => {
  if (!icon || !type) {
    return null;
  }
  return (
    <Container>
      <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Text>{ICON_TEXT[type]}</Text>
    </Container>
  );
};

const Icon = React.memo(IconComp);

export { Props, Icon };
