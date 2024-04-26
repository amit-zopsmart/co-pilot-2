import { Box } from "@mui/material";
import React, { useState } from "react";
import QueryComponent from "../common/queryComponent";
import SQLQueryComponent from "./SQLQueryComponent";
import PieChartComponent from "./PieChartComponent";

const FirstView = ({ text }) => {
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
      <SQLQueryComponent setStepper={setStepper} />
      {stepper > 1 ? <PieChartComponent setStepper={setStepper} /> : null}
    </Box>
  );
};

export default FirstView;
