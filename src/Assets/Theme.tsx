// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    project: {
      grey: "#f7f7f7",
      blue: "#4DABF7",
      muted: "#BFBFBF",
      purple: "#6875F5",
    },
  },
});

export default Theme;
