import styled from "@emotion/styled";

const BACKGROUND_COLOR_MAP = {
  "01": "#2daad8",
  "02": "#104e65",
  "03": "#104355",
  "04": "#79559e",
  "09": "#110b4d",
  "10": "#1e1eab",
  "11": "#120934",
  "13": "#100174",
  "50": "#404043",
};

type Fake3DContainerProps = {
  color: string;
  isDay: boolean;
};

export const Fake3DContainer = styled.div<Fake3DContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-color 1000ms linear;
  background-color: ${props => BACKGROUND_COLOR_MAP[props.color]};
  ${props => !props.isDay && "filter: brightness(0.5);"}
`;
