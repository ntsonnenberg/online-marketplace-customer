"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#19603E", light: "#91b5a4" },
    secondary: { main: "#0B3B59" },
    background: { default: "#D1C0A7" },
  },
  typography: {
    h1: { fontSize: 32, fontWeight: 500 },
    h2: { fontSize: 16, fontWeight: 300 },
    h3: { fontSize: 12, fontWeight: 100 },
    h4: { fontSize: 10, fontWeight: 100 },
  },
});

export default theme;
