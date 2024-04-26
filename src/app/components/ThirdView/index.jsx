import { Box } from "@mui/material";
import React, { useState } from "react";
import QueryComponent from "../common/queryComponent";
import IncreaseEC2CostAnswer from "./IncreaseEC2CostAnswer";

const ThirdView = ({ text }) => {
  const [stepper, setStepper] = useState(1);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <QueryComponent queryTitle={text} />
      <IncreaseEC2CostAnswer setStepper={setStepper} stepper={stepper} />
    </Box>
  );
};

export default ThirdView;
