import React from "react";
import { Box } from "@mui/material";
import AskQueryBox from "../common/askQueryBox";

const queryTitles = [
  {
    titleId: 1,
    titleName: "Top cloud costs by services in production account",
    titleUniqueId: "(#24542)",
    isActive: true,
  },
  {
    titleId: 2,
    titleName: "Which application's cost are increasing fastest? ",
    titleUniqueId: "",
    isActive: false,
  },
  {
    titleId: 3,
    titleName:
      "How much money are we losing by not moving to graviton instances?",
    titleUniqueId: "",
    isActive: false,
  },
  {
    titleId: 4,
    titleName: "Which are the largest s3 bucket size?",
    titleUniqueId: "",
    isActive: false,
  },
];

const QueryGroupSection = ({setIsQuestionAsk}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          width: "100%",
        }}
      >
        {queryTitles.slice(0, 2).map((quesTitle) => (
          <AskQueryBox
            key={quesTitle.titleId}
            queryTitle={quesTitle.titleName}
            queryId={quesTitle.titleUniqueId}
            isActive={quesTitle.isActive}
            setIsQuestionAsk={setIsQuestionAsk}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          width: "100%",
        }}
      >
        {queryTitles.slice(2).map((quesTitle) => (
          <AskQueryBox
            key={quesTitle.titleId}
            queryTitle={quesTitle.titleName}
            queryId={quesTitle.titleUniqueId}
            isActive={quesTitle.isActive}
            setIsQuestionAsk={setIsQuestionAsk}
          />
        ))}
      </Box>
    </Box>
  );
};

export default QueryGroupSection;
