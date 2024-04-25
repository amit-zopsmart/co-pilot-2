import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
const Feedback = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignContent="center"
      sx={{ color: "#7f7d7d" }}
    >
      <Typography variant="caption">
        Have the answers been satisfactory so far?{" "}
      </Typography>
      <ThumbUpOffAltIcon sx={{ pl: 1 }} />
      <ThumbDownOffAltIcon sx={{ pl: 1 }} />
    </Stack>
  );
};

export default Feedback;
