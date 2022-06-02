import React from "react";
import { Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  head: number;
  sub: string;
  status: string;
  img: string;
  themeColor: string;
}
const Card3: React.FC<Props> = (props) => {
  const { title, head, sub, status, img, themeColor } = props;
  return (
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
          {title}
        </Heading>
      </GridItem>
      <GridItem>
        <Text as="span" fontSize="2xl">
          {head}
        </Text>
        <Text as="span" fontSize="lg" color={"project.muted"}>
          {sub}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} alignItems={"end"}>
        <Image src={img} h="auto" w={"auto"} />
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gap={"10px"}>
          <Text as="span" color="project.muted">
            Status:
          </Text>
          <Text as="span" color={themeColor}>
            {status}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Card3;
