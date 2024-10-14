import { getHomePage } from "@/actions/home-page";
import { getVendor } from "@/actions/vendors";
import ProductCard from "@/components/ProductCard";
import { Avatar, Box, Card, CardMedia } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const boxClasses = {
  marginBottom: "1em",
  display: "flex",
  gap: 2,
  alignItems: "center",
};

export default async function CompanyPage({
  params,
}: {
  params: { id: string };
}) {
  const vendor = await getVendor(params.id);
  const homePage = await getHomePage(params.id);

  return (
    <Box sx={{ marginY: "5em" }}>
      <Box sx={boxClasses}>
        <Avatar src={vendor?.image} sx={{ width: 75, height: 75 }} />
        <h2>{vendor?.name}</h2>
      </Box>
      <Card sx={{ flexGrow: 1 }}>
        <CardMedia
          component="video"
          src={homePage?.video || ""}
          loop
          controls
        />
      </Card>
      <Box sx={{ marginX: "2em" }}>
        <Box sx={{ marginY: "2em" }}>
          <h2>About Us</h2>
          <Box sx={{ marginX: "2em" }}>
            <p>{homePage?.about}</p>
          </Box>
        </Box>
        <Box sx={{ marginY: "4em" }}>
          <Grid container spacing={2}>
            {homePage?.featured.length
              ? homePage?.featured.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              : null}
          </Grid>
        </Box>
        <Box sx={{ marginY: "2em" }}>
          <h2>Our Mission</h2>
          <Box sx={{ marginX: "2em" }}>
            <p>{homePage?.mission}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
