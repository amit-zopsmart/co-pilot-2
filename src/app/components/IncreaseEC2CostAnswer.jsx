import React from "react";
import { Avatar } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AccordionComponent from "../components/common/AccordionComponent";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomPieChart from "../components/charts/CustomPieChart";

const IncreaseEC2CostAnswer = () => {
  return (
    <AccordionComponent
      heading={
        <Stack direction="row" gap={2} sx={{ p: 2 }}>
          <Avatar
            alt="Virat Kohali"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQG_EP2SJNlqnVsXyGdirJekiVfQpCrqwY0e0jPVqPQ&s"
          />
          <Typography sx={{ pt: 1 }}>
            Your Production account (#24542) has accumulated costs of $100,000
            over past month, here is a spread of cloud costs by services;
          </Typography>
        </Stack>
      }
      queryTitle="Dashboard"
    >
      <Stack
        direction="row"
        sx={{ background: "#eeeef3" }}
        justifyContent="center"
      >
        <CustomPieChart />
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ p: 1 }}>
        <Typography variant="caption" gutterBottom sx={{ color: "#057a1c" }}>
          <ContentCopyIcon sx={{ fontSize: 12 }} /> Add to Dashboard
        </Typography>
        <Typography
          variant="caption"
          gutterBottom
          sx={{ color: "#de1d4d", textDecoration: "underline" }}
        >
          End Prototype
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mt: 2, color: "#7f7d7d" }}>
        <Typography variant="body2">You might also want to know</Typography>
        <Box
          sx={{
            flex: 1,
            borderTop: 1,
            borderColor: "divider",
            ml: 2,
            mr: 2,
            mt: "10px",
          }}
        />
        <KeyboardArrowUpIcon />
      </Stack>
    </AccordionComponent>
  );
};

export default IncreaseEC2CostAnswer;
