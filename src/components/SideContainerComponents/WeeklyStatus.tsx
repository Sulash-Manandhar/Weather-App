import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { WeeklyWeather } from "../Schema/Schema";

interface Props {
  weeklyData: WeeklyWeather[];
}
const WeeklyStatus: React.FC<Props> = (props) => {
  const { weeklyData } = props;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {weeklyData.map((item) => (
        <Box
          key={item.id}
          w="12%"
          textAlign="center"
          bg="white"
          p="1%"
          borderRadius="6px"
          _hover={{ bg: "project.blue", color: "white" }}
        >
          <Stack direction="column" spacing="5px">
            <Text>{days[item.day].substring(0, 3)}</Text>
            <Image src="./assets/cloudy.svg" />
            <Text>{item.temp}&#8451;</Text>
          </Stack>
        </Box>
      ))}
    </Flex>
  );
};

export default WeeklyStatus;
