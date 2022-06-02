import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Clock from "./Clock";

interface Props {
  temp: number;
}
const DisplayTemp: React.FC<Props> = (props) => {
  const { temp } = props;
  let d = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];

  return (
    <Box>
      <Image src="./assets/cloudy.svg" w="90%" m="auto" marginBottom="10px" />
      <Heading as="h1" size="2xl" color="project.blue" marginBottom="10px">
        {temp}&#8451;
      </Heading>
      <Heading as="h1" size="lg" marginBottom="10px">
        {day},{" "}
        <Text as="span" color="project.muted">
          <Clock />
        </Text>
      </Heading>
    </Box>
  );
};

export default DisplayTemp;
