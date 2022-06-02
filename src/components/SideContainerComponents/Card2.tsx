import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";

interface Props {
  temp: number;
}
const Card2: React.FC<Props> = (props) => {
  const { temp } = props;
  return (
    <>
      <Grid
        bg="white"
        borderRadius="6px"
        gridTemplateColumns="80% 20%"
        gridTemplateRows="auto auto auto"
        gap="10px"
        p="10px"
        height="100%"
      >
        <GridItem colSpan={2}>
          <Heading as="span" fontSize="sm" color="project.muted">
            Temperature
          </Heading>
        </GridItem>
        <GridItem>
          <Text as="span" fontSize="2xl">
            {temp}
          </Text>
          <Text as="span" fontSize="lg" color={"project.muted"}>
            &#8451;
          </Text>
        </GridItem>
        <GridItem rowSpan={2} alignItems={"end"}>
          <Image src="./assets/temprature.svg" h="auto" w={"auto"} />
        </GridItem>
        <GridItem>
          <Flex alignItems="center" gap={"10px"}>
            <GrLocation />
            Kathmandu, Nepal
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Card2;
