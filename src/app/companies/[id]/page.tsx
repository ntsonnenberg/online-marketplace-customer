import { Box } from "@mui/material";

export default function CompanyPage({ params }: { params: { id: string } }) {
  return <Box sx={{ marginTop: "5em" }}>Company Page {params.id}</Box>;
}
