import { getVendors } from "@/actions/vendors";
import Cart from "@/components/Cart";
import CompanyVideo from "@/components/CompanyVideo";
import { Box, Container } from "@mui/material";

const baseContainerClasses = {
  marginTop: "5em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

export default async function Home() {
  const vendors = await getVendors();

  return (
    <main>
      <Container maxWidth="lg" sx={baseContainerClasses}>
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          {vendors &&
            vendors.map((vendor) => (
              <CompanyVideo
                key={vendor._id}
                name={vendor.name}
                image={vendor.image}
                video="blah blah"
              />
            ))}
        </Box>
        <Box sx={{ paddingTop: "3em" }}>
          <Cart />
        </Box>
      </Container>
    </main>
  );
}
