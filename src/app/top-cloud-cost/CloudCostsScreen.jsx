import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CircularProgress,
  CssBaseline,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

const CloudCostsScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Replace this with your actual API call to execute the query
      const result = await fetch("/api/cloud-costs");
      const data = await result.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          <Stack sx={{ bgcolor: "#cfe8fc", height: "60px", width: "full", borderRadius: '15px', p: '16px', mt: '4px' }}>
            <Typography>reduce cost</Typography>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default CloudCostsScreen;
