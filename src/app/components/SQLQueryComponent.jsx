import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import QueryComponent from "./common/queryComponent";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CachedIcon from "@mui/icons-material/Cached";
import { ShowSQL } from "./ShowSQL";
import AccordionComponent from "./common/AccordionComponent";
const SQLQueryComponent = ({ setStepper }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setStepper(2);
    }, 1000);
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      {loading ? (
        <QueryComponent queryTitle="Generating Sql Query..." />
      ) : (
        <AccordionComponent queryTitle="Query">
          <ShowSQL />
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="caption"
              gutterBottom
              sx={{ color: "#057a1c" }}
            >
              <ContentCopyIcon sx={{ fontSize: 12 }} /> Copy Query
            </Typography>
            <Stack direction="row" gap={2}>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ color: "#a6a7a6" }}
              >
                Last run on 12 Oct, 2023
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                sx={{ color: "#057a1c" }}
              >
                <CachedIcon sx={{ fontSize: 12 }} /> Re-run Query
              </Typography>
            </Stack>
          </Stack>
        </AccordionComponent>
      )}
    </Box>
  );
};

export default SQLQueryComponent;
