import { Box, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import SideContainer from "./components/SideContainer";
import {
  TodaysWeather,
  WeeklyWeather,
  Coordinates,
} from "./components/Schema/Schema";

const Dashboard = () => {
  const [todayData, setTodayData] = useState<TodaysWeather>({
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    visibility: 0,
    wind_speed: 0,
    status: "",
    rain_status: 0,
  });
  const [weeklyData, setWeeklyData] = useState<WeeklyWeather[]>([]);
  const [cord, setCord] = useState<Coordinates>({
    lon: 85.3206,
    lat: 27.70169,
    district: "Kathmandu",
    country: "Nepal",
  });
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  //@desc fetch current weather data and daily weather data
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cord.lat}&lon=${cord.lon}&units=metric&exclude=minutely,hourly,alerts&appid=8537edd8c0c07cf39e8ba8cc27549baf`
      )
      .then((res: any) => {
        let todayStatics: TodaysWeather = {
          humidity: res.data.current.humidity,
          sunrise: res.data.current.sunrise,
          sunset: res.data.current.sunset,
          temp: res.data.current.temp,
          visibility: res.data.current.visibility,
          wind_speed: res.data.current.wind_speed,
          status: res.data.current.weather[0].description,
          rain_status: res.data.current.dew_point,
        };
        setTodayData(todayStatics);
        let weeklyStatics: any = [];
        let i = new Date().getDay();
        res.data.daily.map((item: any, index: number) => {
          if (index < 7) {
            weeklyStatics.push({
              id: index,
              temp: item.temp.day,
              status: item.weather[0].description,
              day: i,
            });
          }
          if (i === 6) {
            i = 0;
          } else {
            i++;
          }
        });

        setWeeklyData(weeklyStatics);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [cord]);

  const handleTemperatureConversion = (): void => {
    let todayStatics: TodaysWeather = { ...todayData };
    let weeklyStatics: WeeklyWeather[] = [...weeklyData];
    //Convertng to Celsius
    if (!isCelsius) {
      todayStatics.temp = parseFloat(
        (((todayStatics.temp - 32) * 5) / 9).toFixed(2)
      );
      weeklyStatics.map(
        (item) =>
          (item.temp = parseFloat((((item.temp - 32) * 5) / 9).toFixed(2)))
      );
      setTodayData(todayStatics);
      setWeeklyData(weeklyStatics);
    }
    //converting to fahrenheit
    if (isCelsius) {
      todayStatics.temp = parseFloat(
        ((todayStatics.temp * 9) / 5 + 32).toFixed(2)
      );

      weeklyStatics.map(
        (item) =>
          (item.temp = parseFloat(((item.temp * 9) / 5 + 32).toFixed(2)))
      );
      setWeeklyData(weeklyStatics);
      setTodayData(todayStatics);
    }
  };
  return (
    <Box>
      <Grid templateColumns="25% 75%" h="100%" templateRows="100% 100%">
        <GridItem p="10px" bg="white">
          <SideBar
            temp={todayData.temp}
            status={todayData.status}
            rain={todayData.rain_status}
            setCord={setCord}
            district={cord.district}
          />
        </GridItem>
        <GridItem p="10px" bg="project.grey">
          <SideContainer
            humidity={todayData.humidity}
            visibility={todayData.visibility}
            temp={todayData.temp}
            sunrise={todayData.sunrise}
            sunset={todayData.sunset}
            wind_speed={todayData.wind_speed}
            weeklyData={weeklyData}
            isCelsius={isCelsius}
            setIsCelsius={setIsCelsius}
            handleTemperatureConversion={handleTemperatureConversion}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
