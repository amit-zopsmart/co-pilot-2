import React from "react";
import { Box } from "@mui/material";
import AskQueryBox from "../common/askQueryBox";

const QueryGroupSection = ({ queryTitles }) => {
  console.log('queryTitles', queryTitles);
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
        {queryTitles?.slice(0, 2).map((quesTitle) => (
          <AskQueryBox
            key={quesTitle.titleId}
            queryTitle={quesTitle.titleName}
            queryId={quesTitle.titleUniqueId}
            isActive={quesTitle.isActive}
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
        {queryTitles?.slice(2).map((quesTitle) => (
          <AskQueryBox
            key={quesTitle.titleId}
            queryTitle={quesTitle.titleName}
            queryId={quesTitle.titleUniqueId}
            isActive={quesTitle.isActive}
          />
        ))}
      </Box>
    </Box>
  );
};

export default QueryGroupSection;
