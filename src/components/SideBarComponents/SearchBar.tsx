import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Coordinates } from "../Schema/Schema";

interface Props {
  setCord: (arg: Coordinates) => void;
}
const SearchBar: React.FC<Props> = (props) => {
  const { setCord } = props;
  const [searchItem, setSearchItem] = useState<any>([]);
  let timeout: any = null;

  const getSearchWord = (e: any): void => {
    e.preventDefault();
    if (e.target.value !== "") {
      axios
        .get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${e.target.value}&limit=3&appid=8537edd8c0c07cf39e8ba8cc27549baf`
        )
        .then((res: any) => {
          if (res.data.length) {
            setSearchItem(res.data);
          } else {
            setSearchItem([]);
          }
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      setSearchItem([]);
    }
  };

  const setCoordinates = (
    district: string,
    lat: number,
    lon: number,
    country: string
  ): void => {
    let coordinates = {
      district: district,
      lat: lat,
      lon: lon,
      country: country,
    };
    console.log("Logged Output : coordinates", coordinates);

    setCord(coordinates);
    setSearchItem([]);
  };

  const validSearch = (e: any): void => {
    e.preventDefault();
    if (setTimeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      getSearchWord(e);
    }, 500);
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
          onChange={validSearch}
        />
      </InputGroup>

      <Box
        mt={1}
        borderRadius={6}
        bg={"project.grey"}
        position={"absolute"}
        width="100%"
      >
        {searchItem?.length > 0 &&
          searchItem.map((item: any, index: number) => (
            <Box
              borderBottom={"1px solid white"}
              p="5px"
              _hover={{ bg: "project.blue", color: "white" }}
              key={index}
            >
              <Grid
                gridTemplateColumns={"auto auto auto"}
                gridTemplateRows={"auto"}
                justifyContent={"space-between"}
                w="100%"
                px="2"
                cursor={"pointer"}
                onClick={(e) => {
                  e.preventDefault();
                  setCoordinates(item.name, item.lat, item.lon, item.country);
                }}
              >
                <GridItem>{item?.country}</GridItem>
                <GridItem>{item?.state}</GridItem>

                <GridItem>{item?.name}</GridItem>
              </Grid>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default SearchBar;
