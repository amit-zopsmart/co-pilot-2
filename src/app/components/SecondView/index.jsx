import { Box } from "@mui/material";
import React, { useState } from "react";
import QueryComponent from "../common/queryComponent";
import ReduceEC2CostAnswer from "../ReduceEC2CostAnswer";

const SecondView = ({ text }) => {
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
      <ReduceEC2CostAnswer setStepper={setStepper} stepper={stepper} />
    </Box>
  );
};

export default SecondView;
