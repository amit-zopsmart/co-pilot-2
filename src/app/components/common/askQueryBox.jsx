"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useQuery } from "../../hooks/useQueryContext";
import { QuestionSet } from "@/constant";

const AskQueryBox = ({ queryTitle, queryId, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const {
    isQuestionAsk,
    setIsQuestionAsk,
    setMyFlow,
    currQuestionInd,
    setLoading,
  } = useQuery();

  const shadowValues = {
    none: "none",
    "0-4px-4px": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        border: "1px solid #c9c7c7",
        px: "16px",
        py: "4px",
        my: "8px",
        mx: "8px",
        borderRadius: "15px",
        backgroundColor: isActive ? "#fffefe" : "#f3f3fa",
        cursor: isActive ? "pointer" : "disable",
        opacity: isActive ? 1 : 0.5,
        color: "#5a5959",
        width: "100%",
        height: "60px",
        position: "relative",
        boxShadow:
          isActive && hovered ? shadowValues["0-4px-4px"] : shadowValues.none,
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (isActive) {
          setIsQuestionAsk(true);
          setMyFlow((prev) => [
            ...prev,
            { id: QuestionSet[currQuestionInd], text: queryTitle },
          ]);
          setLoading(true);
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{queryTitle}</Typography>
        {isActive && hovered && (
          <IconButton sx={{ position: "absolute", right: "8px" }}>
            <SendOutlinedIcon />
          </IconButton>
        )}
      </Box>
      <Typography variant="body2">{queryId}</Typography>
    </Box>
  );
};

export default AskQueryBox;
