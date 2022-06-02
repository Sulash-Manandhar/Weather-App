import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  sunrise: number;
  sunset: number;
}

const Card1: React.FC<Props> = (props) => {
  const { sunrise, sunset } = props;

  const sunrise1 = new Date(sunrise * 1000);
  const sunset1 = new Date(sunset * 1000);
  return (
    <Grid
      bg="white"
      gridTemplateRows="auto auto auto"
      gap="10px"
      p="10px"
      height="100%"
      borderRadius="6px"
    >
      <GridItem>
        <Heading as="span" fontSize="sm" color="project.muted">
          Sunrise and sunset
        </Heading>
      </GridItem>
      <GridItem>
        <Flex justifyContent="flex-start" alignItems="center" gap="10px">
          <Image src="./assets/sunny.svg" w="30px" />
          <Box>
            <Text as="h4" fontSize="md">
              {`${sunrise1.getHours()} : ${sunrise1.getMinutes()} am`}
            </Text>
            <Text fontSize="sm" color="project.muted">
              -1m 36s
            </Text>
          </Box>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex justifyContent="flex-start" alignItems="center" gap="10px">
          <Image src="./assets/sunset.svg" w="30px" />
          <Box>
            <Text as="h4" fontSize="md">
              {`${sunset1.getHours()} : ${sunset1.getMinutes()} pm`}
            </Text>
            <Text fontSize="sm" color="project.muted">
              -1m 36s
            </Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Card1;
