import React from "react";

import { Container } from "./Temp.styled";

type Props = Readonly<{
  temp: number;
}>;

const TempComp = ({ temp }: Props) => {
  return <Container>{temp}°</Container>;
};

const Temp = React.memo(TempComp);

export { Props, Temp };
