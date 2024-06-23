import React from "react";
import { Stack, Typography } from "@mui/material";

const Info = () => {
  return (
    <Stack spacing={3}>
      <Typography
        color={"white"}
        fontFamily={"Poppins"}
        fontWeight={700}
        lineHeight={1.1}
        sx={{
          textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
          fontSize: { lg: "2.75rem", xs: "2rem" },
        }}
      >
        Learn to code by <br /> watching others
      </Typography>
      <Typography
        fontSize={16}
        color={"whitesmoke"}
        fontFamily={"Poppins"}
        fontWeight={400}
        sx={{
          textAlign: { lg: "left", md: "left", sm: "center", xs: "center" },
          fontSize: { xs: "15px" },
        }}
      >
        See how experienced developers solve problems in real-time. <br />{" "}
        Watching scripted tutorials is great, but understanding <br /> how
        developers think is invaluable.
      </Typography>
    </Stack>
  );
};

export default Info;
