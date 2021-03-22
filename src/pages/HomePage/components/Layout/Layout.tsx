import React from "react";

import { Container } from "./Layout.styled";

type Props = Readonly<React.PropsWithChildren>;

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export { Props, Layout };
