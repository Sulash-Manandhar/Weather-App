import { Box, Button, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useButton from "../../Utilities/useButton";

const TimerComponent = () => {
  const countDownDate = new Date("2022-06-08 15:30").getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  const [remainder, setRemainder] = useState<string>("");

  const { loading, updateLoading } = useButton();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1000);
      timer(countDown - 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  const timer = (countDown: number): void => {
    const hours = Math.floor((countDown % (3600000 * 24)) / 3600000);
    const minutes = Math.floor((countDown % 3600000) / 60000);
    const seconds = Math.floor((countDown % 60000) / 1000);
    setRemainder(`${hours}h ${minutes}m ${seconds}s`);
  };

  return (
    <Grid
      bg="white"
      h={"100%"}
      p="10px"
      borderRadius="6px"
      placeItems="center"
      gridAutoRows={"auto auto"}
      gap={0}
    >
      <GridItem>
        <Heading size={"lg"}>{`${remainder}`}</Heading>
      </GridItem>

      <GridItem>
        <Button
          onClick={updateLoading}
          isLoading={loading}
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Click me
        </Button>
      </GridItem>
    </Grid>
  );
};

export default TimerComponent;
