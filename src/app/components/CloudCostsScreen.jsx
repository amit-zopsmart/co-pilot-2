import React from "react";
import { CssBaseline } from "@mui/material";
import { Container, Box, Stack } from "@mui/system";
import Feedback from "./Feedback";
import { useQuery } from "../hooks/useQueryContext";
import FirstView from "./FirstView";
import SecondView from "./SecondView";

const getItemComponent = (id, text) => {
  switch (id) {
    case "queryTitles":
      return <FirstView text={text} />;
    case "reduceCostQueryTitles":
      return <SecondView text={text} />;
    case "increaseCostQueryTitles":
      return <FirstView text={text} />;
  }
};
const CloudCostsScreen = () => {
  const { myFlow } = useQuery();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box>
          {myFlow.map(({ id, text }) => {
            return getItemComponent(id, text);
          })}
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
