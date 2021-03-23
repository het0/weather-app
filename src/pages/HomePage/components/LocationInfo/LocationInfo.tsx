import React from "react";

import { getDayString } from "@helpers/helpers";

import { LocationInfoContainer } from "./LocationInfo.styled";

type Props = Readonly<{
  cityName: string;
}>;

const LocationInfoComp = ({ cityName }: Props) => {
  const { day, month } = getDayString();

  return (
    <LocationInfoContainer>
      {cityName ? cityName + "." : null} {day} {month}
    </LocationInfoContainer>
  );
};

const LocationInfo = React.memo(LocationInfoComp);

export { Props, LocationInfo };
