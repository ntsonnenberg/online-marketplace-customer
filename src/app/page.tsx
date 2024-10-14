import { getHomePage } from "@/actions/home-page";
import { getVendors } from "@/actions/vendors";
import Cart from "@/components/Cart";
import CompanyVideo from "@/components/CompanyVideo";
import { Vendor } from "@/models/Vendor";
import { Box, Container, Divider } from "@mui/material";

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

  return (
    <main>
      <Container maxWidth="lg" sx={baseContainerClasses}>
        <Box>
          {vendorsWithVideos &&
            vendorsWithVideos.map((vendor) => (
              <>
                <CompanyVideo key={vendor._id} vendor={vendor} />
                {vendorsWithVideos.pop()._id === vendor._id ? null : (
                  <Divider />
                )}
              </>
            ))}
        </Box>
        <Box sx={{ paddingTop: "3em" }}>
          <Cart />
        </Box>
      </Container>
    </main>
  );
}
