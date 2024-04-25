import React from "react";
import { Box } from "@mui/material";
import InputBox from "./InputBox";
import QueryGroupSection from "./QueryGroupSection";
import { queryTitles } from "../../data/apiJson";

const FirstScreen = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 3 }}>
      <QueryGroupSection
        queryTitles={queryTitles}
      />
      <InputBox />
    </Box>
  );
};

export default FirstScreen;
