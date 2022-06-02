import { Divider, Stack } from "@chakra-ui/react";
import React from "react";
import DisplayTemp from "./SideBarComponents/DisplayTemp";
import Info from "./SideBarComponents/Info";
import LocationCard from "./SideBarComponents/LocationCard";
import SearchBar from "./SideBarComponents/SearchBar";
import { Coordinates } from "./Schema/Schema";

interface Props {
  temp: number;
  status: string;
  rain: number;
  setCord: (arg: Coordinates) => void;
  district: string;
}
const SideBar: React.FC<Props> = (props) => {
  const { temp, status, rain, district, setCord } = props;

  return (
    <Stack spacing="10px" direction="column">
      <SearchBar setCord={setCord} />
      <DisplayTemp temp={temp} />
      <Divider color="project.muted" />
      <Info imagePath={"./assets/cloudy.svg"} status={status} />
      <Info imagePath={"./assets/cloudy.svg"} status={rain} />
      <LocationCard district={district} />
    </Stack>
  );
};

export default SideBar;
