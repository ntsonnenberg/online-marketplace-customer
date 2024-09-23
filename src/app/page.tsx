import { getHomePage } from "@/actions/home-page";
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

  const vendorsWithVideos = [];
  if (vendors) {
    for (let vendor of vendors) {
      const homePage = await getHomePage(vendor._id);
      vendorsWithVideos.push({ ...vendor, video: homePage?.video });
    }
  }

  console.log(vendorsWithVideos);

  return (
    <main>
      <Container maxWidth="lg" sx={baseContainerClasses}>
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          {vendors &&
            vendorsWithVideos.map((vendor) => (
              <CompanyVideo key={vendor._id} vendor={vendor} />
            ))}
        </Box>
        <Box sx={{ paddingTop: "3em" }}>
          <Cart />
        </Box>
      </Container>
    </main>
  );
}
