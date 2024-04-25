import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function AccordionComponent({ heading, queryTitle, children }) {
  return (
    <Accordion defaultExpanded sx={{ mt: "8px" }}>
      {heading && heading}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {queryTitle && (
          <Typography variant="subtitle1">{queryTitle}</Typography>
        )}
        <Box
          sx={{
            flex: 1,
            borderTop: 1,
            borderColor: "divider",
            ml: 2,
            mr: 2,
            mt: 2,
          }}
        />
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
