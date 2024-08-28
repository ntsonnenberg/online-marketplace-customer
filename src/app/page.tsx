import Cart from "@/components/Cart";
import { Box, Container } from "@mui/material";

const baseContainerClasses = {
  marginTop: "5em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg" sx={baseContainerClasses}>
        <Box sx={{ bgcolor: "#cfe8fc" }}>Company Videos</Box>
        <Box sx={{ paddingTop: "3em" }}>
          <Cart />
        </Box>
      </Container>
    </main>
  );
}
