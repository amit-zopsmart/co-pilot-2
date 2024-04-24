import React from "react";
import { Box } from "@mui/material";
import InputBox from "./InputBox";
import QueryGroupSection from "./QueryGroupSection";
const FirstScreen = ({ setIsQuestionAsk }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 3 }}>
      <QueryGroupSection setIsQuestionAsk={setIsQuestionAsk} />
      <InputBox />
    </Box>
  );
};

export default FirstScreen;
