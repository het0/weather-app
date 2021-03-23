import styled from "@emotion/styled";

import { GLOBAL_MEDIA_QUERIES } from "@hooks/media";

export const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background: rgba(6, 20, 22, 0.8);
  backdrop-filter: blur(4px);
  margin: 0 0 100px 100px;
  padding: 35px;
  box-sizing: border-box;

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    margin: 50px 0 0 0;
    width: 80%;
    height: auto;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  width: 100%;
  padding-top: 20px;

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    justify-content: center;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
  }
`;

export const VerticalLine = styled.div`
  display: flex;
  height: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 20px;

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    margin: 0 20px;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    display: none;
  }
`;

export const HorizontalLine = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 20px;
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 485px;
  height: 100%;
  padding: 0 60px 0 60px;
  background: rgba(6, 20, 22, 0.8);
  backdrop-filter: blur(20px);
  box-sizing: border-box;

  @media ${GLOBAL_MEDIA_QUERIES.medium} {
    margin-top: 40px;
    width: 80%;
  }

  @media ${GLOBAL_MEDIA_QUERIES.small} {
    width: 100%;
  }
`;

type SidePanelRowProps = {
  header?: boolean;
  top?: number;
};

export const SidePanelRow = styled.div<SidePanelRowProps>`
  display: flex;
  justify-content: ${props => (props.header ? "flex-start" : "space-between")};
  width: 100%;
  margin-top: ${props => props.top}px;
  font-size: ${props => (props.header ? 24 : 18)}px;
  font-weight: ${props => (props.header ? "bold" : "normal")};
`;
