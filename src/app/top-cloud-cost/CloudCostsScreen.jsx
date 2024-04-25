import React from "react";
import { CssBaseline } from "@mui/material";
import { Container, Box } from "@mui/system";
import QueryComponent from "../components/common/queryComponent";
import Feedback from "../components/Feedback";
import PieChartComponent from "../components/PieChartComponent";
import SQLQueryComponent from "../components/SQLQueryComponent";
import ReduceEC2CostAnswer from "../components/ReduceEC2CostAnswer";
import IncreaseEC2CostAnswer from "../components/IncreaseEC2CostAnswer";

const CloudCostsScreen = ({ queryTitle }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <QueryComponent queryTitle={queryTitle} />
          <SQLQueryComponent />
          <PieChartComponent />
          <QueryComponent queryTitle="How can I reduce my EC2 costs?" />
          <ReduceEC2CostAnswer />
          <QueryComponent queryTitle="Why are EC2 costs increases so much?" />
          <IncreaseEC2CostAnswer />
          <Feedback />
        </Box>
      </Container>
    </>
  );
};

export default CloudCostsScreen;
