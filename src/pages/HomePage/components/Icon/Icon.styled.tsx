import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-align: center;
`;

export type IconContainerProps = {
  svg: string;
};

export const IconContainer = styled.div<IconContainerProps>`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  font-size: 1em;
  background-color: white;
  mask: url(${props => props.svg}) no-repeat center / contain;

  img {
    fill: white;
  }
`;
