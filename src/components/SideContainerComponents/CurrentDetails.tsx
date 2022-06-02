import { Grid, GridItem, Heading } from "@chakra-ui/react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

interface Props {
  humidity: number;
  visibility: number;
  temp: number;
  sunrise: number;
  sunset: number;
  wind_speed: number;
}

const CurrentDetails: React.FC<Props> = (props) => {
  const { humidity, visibility, temp, sunrise, sunset, wind_speed } = props;

  const data = [
    {
      id: 1,
      title: "WindStatus",
      head: wind_speed,
      sub: "km/h",
      status: "",
      img: "./assets/temprature.svg",
      color: "",
    },
    {
      id: 2,
      title: "Humidity",
      head: humidity,
      sub: "%",
      status: "Good Quality",
      img: "./assets/temprature.svg",
      color: "blue",
    },
    {
      id: 3,
      title: "Visibility",
      head: visibility / 1000,
      sub: "km/h",
      status: "Average",
      img: "./assets/temprature.svg",
      color: "yellow",
    },
    {
      id: 4,
      title: "Air Quality",
      head: 120,
      sub: "km/h",
      status: "Bad Quality",
      img: "./assets/temprature.svg",
      color: "red",
    },
  ];

  return (
    <>
      <Heading as="h1" fontSize="md" color="project.muted" mb="20px">
        Today's Highlight
      </Heading>
      <Grid
        gridTemplateRows="auto auto"
        gridTemplateColumns="auto auto auto"
        gap="30px"
      >
        <GridItem>
          <Card1 sunrise={sunrise} sunset={sunset} />
        </GridItem>
        <GridItem>
          <Card2 temp={temp} />
        </GridItem>
        {data.map((item, index) => (
          <GridItem key={index}>
            <Card3
              title={item.title}
              head={item.head}
              sub={item.sub}
              status={item.status}
              img={item.img}
              themeColor={item.color}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default CurrentDetails;
