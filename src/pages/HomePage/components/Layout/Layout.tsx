import React from "react";

import { Container } from "./Layout.styled";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const LayoutComp = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Layout = React.memo(LayoutComp);

export { Props, Layout };
