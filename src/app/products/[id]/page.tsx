import { Box } from "@mui/material";

export default function ProductPage({ params }: { params: { id: string } }) {
  return <Box sx={{ margin: "5em" }}>Product Page {params.id}</Box>;
}
