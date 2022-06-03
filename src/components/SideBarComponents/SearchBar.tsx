import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { Coordinates } from "../Schema/Schema";

interface Props {
  setCord: (arg: Coordinates) => void;
}
const SearchBar: React.FC<Props> = (props) => {
  const { setCord } = props;
  const getSearchWord = (e: any): void => {
    e.preventDefault();
    if (e.key === "Enter") {
      getCoordinated(e.target.value);
    }
  };

  const getCoordinated = (search: string): void => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=ebf68f619031f111430362e3c38c66be`
      )
      .then((res: any) => {
        console.log(res);
        if (res.data.length) {
          let coordinates = {
            district: res.data[0].name,
            lat: res.data[0].lat,
            lon: res.data[0].lon,
            country: res.data[0].country,
          };
          setCord(coordinates);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <Box position={"relative"}>
      <InputGroup>
        <InputLeftElement children={<AiOutlineSearch />} />
        <Input
          type="text"
          placeholder="Search Places"
          bg="project.grey"
          borderColor="project.grey"
          pattern="\b[A-z]+\b"
          onKeyDown={(e: any) => (e.key === "Enter" ? getSearchWord(e) : null)}
        />
      </InputGroup>
      <Box
        mt={1}
        borderRadius={6}
        bg={"project.grey"}
        position={"absolute"}
        width="100%"
        display={"none"}
      >
        <Box
          borderBottom={"1px solid white"}
          p="5px"
          _hover={{ bg: "project.blue", color: "white" }}
        >
          <option value="option1">Option 1</option>
        </Box>
        <Box
          borderBottom={"1px solid white"}
          p="5px"
          _hover={{ bg: "project.blue", color: "white" }}
        >
          <option value="option1">Option 1</option>
        </Box>
        <Box
          borderBottom={"1px solid white"}
          p="5px"
          _hover={{ bg: "project.blue", color: "white" }}
        >
          <option value="option1">Option 1</option>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
