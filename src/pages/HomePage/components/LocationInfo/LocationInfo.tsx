import React from "react";

import { getDayString } from "helpers/helpers";

import { LocationInfoContainer } from "./LocationInfo.styled";

type Props = Readonly<{
  cityName: string;
}>;

const LocationInfo = ({ cityName }: Props) => {
  const { day, month } = getDayString();

  return (
    <LocationInfoContainer>
      {cityName}. {day} {month}
    </LocationInfoContainer>
  );
};

export { Props, LocationInfo };
