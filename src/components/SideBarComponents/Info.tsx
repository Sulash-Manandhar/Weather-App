import { Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  imagePath: string;
  status?: string | number;
}
const Info: React.FC<Props> = (props) => {
  const { imagePath, status } = props;
  return (
    <Flex alignItems="center">
      <Image src={imagePath} w="10%" mr="20px" />
      <Text textTransform={"capitalize"}>{status}</Text>
    </Flex>
  );
};

export default Info;
