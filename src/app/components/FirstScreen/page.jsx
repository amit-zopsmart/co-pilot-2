import React from "react";
import { Box } from "@mui/material";
import InputBox from "./InputBox";
import QueryGroupSection from "./QueryGroupSection";
import { QuestionSetData } from "../../data/apiJson";
import { QuestionSet } from "@/constant";
import { useQuery } from "@/app/hooks/useQueryContext";

const FirstScreen = () => {
  const { currQuestionInd, isQuestionAsk } = useQuery();
  return (
    <Box sx={{ position: "fixed", bottom: 3 }}>
      {currQuestionInd === 0 && (
        <QueryGroupSection
          queryTitles={QuestionSetData[QuestionSet[currQuestionInd]]}
        />
      )}
      {!isQuestionAsk && <InputBox />}
    </Box>
  );
};

export default FirstScreen;
