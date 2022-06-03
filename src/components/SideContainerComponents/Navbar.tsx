import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

interface Props {
  isCelsius: boolean;
  setIsCelsius: (arg: boolean) => void;
  handleTemperatureConversion: (arg: void) => void;
}
const Navbar: React.FC<Props> = (props) => {
  const { isCelsius, setIsCelsius, handleTemperatureConversion } = props;

  const handleButtonClick = (e: any): void => {
    e.preventDefault();
    setIsCelsius(!isCelsius);
    handleTemperatureConversion();
  };

  return (
    <Flex direction="row" justifyContent="space-between">
      <Flex flexBasis="40%" justifyContent="flex-start">
        <Text as="span" flexBasis="100px">
          Today
        </Text>
        <Text as="span" flexBasis="100px" color="project.blue">
          Week
        </Text>
      </Flex>
      <Box flexBasis="50%">
        <Flex justifyContent="flex-end">
          <Box
            cursor={"pointer"}
            borderRadius="50%"
            h="30px"
            w="30px"
            bg={isCelsius ? "project.blue" : "project.muted"}
            color="white"
            mr="10px"
            onClick={handleButtonClick}
          >
            <Text align="center">&#8451;</Text>
          </Box>
          <Box
            cursor={"pointer"}
            borderRadius="50%"
            h="30px"
            w="30px"
            color="white"
            bg={!isCelsius ? "project.blue" : "project.muted"}
            mr="10px"
            onClick={handleButtonClick}
          >
            <Text align="center">&#x2109;</Text>
          </Box>
          <Box mr="10px" bg="white">
            <Flex alignItems="center">
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="sm"
                mr="10px"
              />
              <Text fontSize="sm" mr="20px">
                Diagonal Technology
              </Text>
              <AiOutlineArrowDown />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
