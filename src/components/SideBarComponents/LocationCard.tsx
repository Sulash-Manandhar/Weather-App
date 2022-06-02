import { Flex, Heading } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";

interface Props {
  district: string;
}

const LocationCard: React.FC<Props> = (props) => {
  const { district } = props;
  return (
    <Flex
      border="1px dashed black"
      borderWidth="medium"
      h="200px"
      borderColor="project.muted"
      p="10px"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <GrLocation style={{ fontSize: "28px" }} />
      <Heading as="h1" size="md" ml="5px" overflow={"clip"}>
        {district}
      </Heading>
    </Flex>
  );
};

export default LocationCard;
