import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";

const InputBox = () => {
  return (
    <FormControl variant="outlined" fullWidth >
      <OutlinedInput
        sx={{ background: "#fff" }}
        id="outlined-adornment-weight"
        endAdornment={
          <InputAdornment position="end">
            <CodeOffOutlinedIcon /> <SendOutlinedIcon />
          </InputAdornment>
        }
        aria-describedby="outlined-input-helper-text"
        placeholder="Start typing your query here..."
      />
    </FormControl>
  );
};

export default InputBox;
