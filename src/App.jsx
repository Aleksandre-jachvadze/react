import React from "react";
import { Stack } from "@mui/material";
import "./App.css";
import BgDesk from "./assets/bg-intro-desktop.png";
import BgMobile from "./assets/bg-intro-mobile.png";
import Info from "./components/Info";
import FormComponent from "./components/FormComponent";

const App = () => {
  return (
    // Body Stack
    <Stack
      sx={{
        backgroundColor: "hsl(0, 100%, 74%) ",
        backgroundImage: {
          lg: `url(${BgDesk})`,
          md: `url(${BgDesk})`,
          sm: `url(${BgMobile})`,
          xs: `url(${BgMobile})`,
        },
      }}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"100vh"}
    >
      {/* Wrapper Stack */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        mx={2}
        my={4}
        gap={5}
        sx={{
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        maxWidth={"1440px"}
      >
        {/* Information Component */}
        <Info />
        {/* Form Component */}
        <FormComponent />
      </Stack>
    </Stack>
  );
};

export default App;
