import React from "react";
import { Typography, Avatar } from "@mui/material";
import {Stack } from "@mui/system";
const QueryComponent = ({ queryTitle }) => {
  return (
      <Stack
        sx={{
          bgcolor: "#cfe8fc",
          height: "60px",
          width: "full",
          borderRadius: "15px",
          p: "16px",
          mt: "4px",
        }}
        direction="row"
        alignItems="center"
      >
        <Avatar
          alt="Virat Kohali"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQG_EP2SJNlqnVsXyGdirJekiVfQpCrqwY0e0jPVqPQ&s"
        />
        <Typography pl="8px">{queryTitle}</Typography>
      </Stack>
  );
};

export default QueryComponent;
