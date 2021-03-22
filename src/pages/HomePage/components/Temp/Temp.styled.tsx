import styled from "@emotion/styled";

import { GLOBAL_MEDIA_QUERIES } from "hooks/media";

const Container = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 140px;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    width: 100%;
    justify-content: center;
  }
`;

export { Container };
