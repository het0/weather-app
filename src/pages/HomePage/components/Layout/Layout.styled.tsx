import styled from "@emotion/styled";

import { GLOBAL_MEDIA_QUERIES } from "hooks/media";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export { Container };
