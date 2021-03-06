import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CurrentDetails from "./SideContainerComponents/CurrentDetails";
import Navbar from "./SideContainerComponents/Navbar";
import WeeklyStatus from "./SideContainerComponents/WeeklyStatus";
import { WeeklyWeather } from "./Schema/Schema";

interface Props {
  humidity: number;
  visibility: number;
  temp: number;
  sunrise: number;
  sunset: number;
  wind_speed: number;
  weeklyData: WeeklyWeather[];
  isCelsius: boolean;
  setIsCelsius: (arg: boolean) => void;
  handleTemperatureConversion: (arg: void) => void;
}

const SideContainer: React.FC<Props> = (props) => {
  const { weeklyData, isCelsius, setIsCelsius, handleTemperatureConversion } =
    props;
  return (
    <Grid gridAutoRows="auto auto auto" gap="30px">
      <GridItem>
        <Navbar
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
          handleTemperatureConversion={handleTemperatureConversion}
        />
      </GridItem>
      <GridItem>
        <WeeklyStatus weeklyData={weeklyData} />
      </GridItem>
      <GridItem>
        <CurrentDetails
          humidity={props.humidity}
          visibility={props.visibility}
          temp={props.temp}
          sunrise={props.sunrise}
          sunset={props.sunset}
          wind_speed={props.wind_speed}
        />
      </GridItem>
    </Grid>
  );
};

export default SideContainer;
