import React from "react";

import { Container } from "./Temp.styled";

type Props = Readonly<{
  temp: number;
}>;

const Temp = ({ temp }: Props) => {
  return <Container>{temp}°</Container>;
};

export { Props, Temp };
