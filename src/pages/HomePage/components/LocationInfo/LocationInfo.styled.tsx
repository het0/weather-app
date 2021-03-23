import styled from "@emotion/styled";

import { GLOBAL_MEDIA_QUERIES } from "@hooks/media";

const LocationInfoContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    justify-content: center;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    justify-content: flex-start;
  }
`;

export { LocationInfoContainer };
