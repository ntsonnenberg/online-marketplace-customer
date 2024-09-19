"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: { main: "#19603E" },
    secondary: { main: "#0B3B59" },
    background: { default: "#D1C0A7" },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontSize: 32, fontWeight: 500 },
    h2: { fontSize: 16, fontWeight: 300 },
    h3: { fontSize: 12, fontWeight: 100 },
  },
});

export default theme;
