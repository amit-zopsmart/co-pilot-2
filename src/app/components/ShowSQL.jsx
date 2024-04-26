import React from "react";
import { Box } from "@mui/material";
// import DotLoader from '../../Loader/DotLoader';
import CopyToClipboardButton from "./common/CopyToClipboard";
import { Code } from "../libs/atoms";

export const ShowSQL = () => {
  return (
    <Box sx={{ p: 1 }}>
      <div>
        {
          <>
            <Code className="code-container">
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  maxHeight: "400px",
                  overflow: "auto",
                  fontSize: "12px",
                  color: "#fefefe",
                }}
              >
                {`SELECT
    select,
    SUM(cost) AS total_cost
FROM
    cloud_costs
WHERE
  account_type='production(#24542)
GROUP BY
  service
ORDER BY
 total_cost DESC;
  `}
              </pre>
              <CopyToClipboardButton isSQL />
            </Code>
          </>
        }
      </div>
    </Box>
  );
};
