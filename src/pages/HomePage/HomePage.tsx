import React from "react";

import { useWeather } from "@hooks/weather";

import { Layout } from "./components/Layout/Layout";
import { Fake3DImage } from "./components/Fake3DImage/Fake3DImage";
import { Temp } from "./components/Temp/Temp";
import { LocationInfo } from "./components/LocationInfo/LocationInfo";
import { Icon } from "./components/Icon/Icon";
import {
  TempContainer,
  VerticalLine,
  HorizontalLine,
  AdditionalInfo,
  SidePanel,
  SidePanelRow,
} from "./HomePage.styled";

const HomePage = () => {
  const { name, temp, hum, wind, type, icon } = useWeather();

  return (
    <Layout>
      <Fake3DImage type={type} icon={icon} />
      <TempContainer>
        <LocationInfo cityName={name} />
        <AdditionalInfo>
          <Temp temp={temp} />
          <VerticalLine />
          <Icon type={type} icon={icon} />
        </AdditionalInfo>
      </TempContainer>
      <SidePanel>
        <SidePanelRow top={30} header>
          Weather Details
        </SidePanelRow>
        <HorizontalLine />
        <SidePanelRow top={30}>
          <div>Wind</div>
          <div>{wind} km/h</div>
        </SidePanelRow>
        <SidePanelRow top={20}>
          <div>Humidity</div>
          <div>{hum} %</div>
        </SidePanelRow>
        {/* <SidePanelRow top={60} header>
          Other locations
        </SidePanelRow>
        <HorizontalLine /> */}
      </SidePanel>
    </Layout>
  );
};

export { HomePage };
