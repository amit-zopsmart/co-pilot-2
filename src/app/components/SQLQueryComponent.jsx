import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import QueryComponent from "./common/queryComponent";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CachedIcon from "@mui/icons-material/Cached";
import { ShowSQL } from "../top-cloud-cost/ShowSQL";
import AccordionComponent from "./common/AccordionComponent";
const SQLQueryComponent = () => {
  return (
    <AccordionComponent queryTitle="Query">
      <ShowSQL />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" gutterBottom sx={{ color: "#057a1c" }}>
          <ContentCopyIcon sx={{ fontSize: 12 }} /> Copy Query
        </Typography>
        <Stack direction="row" gap={2}>
          <Typography variant="caption" gutterBottom sx={{ color: "#a6a7a6" }}>
            Last run on 12 Oct, 2023
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ color: "#057a1c" }}>
            <CachedIcon sx={{ fontSize: 12 }} /> Re-run Query
          </Typography>
        </Stack>
      </Stack>
    </AccordionComponent>
  );
};

export default SQLQueryComponent;
