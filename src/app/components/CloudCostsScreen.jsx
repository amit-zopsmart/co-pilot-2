import React from "react";
import { CssBaseline } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import Feedback from "./Feedback";
import { useQuery } from "../hooks/useQueryContext";
import FirstView from "./FirstView";
import SecondView from "./SecondView";
import ThirdView from "./ThirdView";

const getItemComponent = (id, text) => {
  switch (id) {
    case "queryTitles":
      return <FirstView key={id} text={text} />;
    case "reduceCostQueryTitles":
      return <SecondView key={id} text={text} />;
    case "increaseCostQueryTitles":
      return <ThirdView key={id} text={text} />;
    default:
      return null;
  }
};

const CloudCostsScreen = () => {
  const { myFlow } = useQuery();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          {myFlow.map(({ id, text }) => getItemComponent(id, text))}
          {myFlow.length >= 2 && (
            <Stack sx={{ mt: 2 }}>
              <Feedback />
            </Stack>
          )}
        </Box>
      </Container>
    </>
  );
};

export default CloudCostsScreen;
