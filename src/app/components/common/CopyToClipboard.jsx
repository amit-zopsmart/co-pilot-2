import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CopyToClipboardButton = ({ isSQL }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    if (!open) {
      const codeElement = e.target.closest(".code-container");

      if (codeElement) {
        const codeText = codeElement.innerText || codeElement.textContent;

        navigator.clipboard.writeText(codeText).then(() => {
          setOpen(true);
        });
      }
    }
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          float: "right",
          color: "#fefefe",
          position: 'absolute',
          bottom: '10%',
          right: '1%',
          transform: 'translate(-50%, 0%)',
          background: "#4bec6b",
          "&:hover": {
            background: "#4bec6b",
          },
        }}
        className={`copy-button ${isSQL ? "SQL-code" : ""}`}
      >
        {open ? (
          <CheckCircleOutlineIcon sx={{ fontSize: 16 }} />
        ) : (
          <ContentCopyIcon sx={{ fontSize: 16 }} />
        )}
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboardButton;
