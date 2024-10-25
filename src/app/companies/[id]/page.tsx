import { getHomePage } from "@/actions/home-page";
import { getVendor } from "@/actions/vendors";
import ProductCard from "@/components/ProductCard";
import { Avatar, Box, Card, CardMedia, Typography } from "@mui/material";
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
        <Typography variant="h1" color="primary.main">
          {vendor?.name}
        </Typography>
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
        <Box sx={{ marginY: "10em" }}>
          <Typography variant="h1" color="primary.main">
            About Us
          </Typography>
          <Box sx={{ marginX: "2em" }}>
            <Typography variant="h6" color="primary.light">
              {homePage?.about}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginY: "10em" }}>
          <Typography
            variant="h1"
            color="primary.main"
            sx={{ marginBottom: "1em" }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={2}>
            {homePage?.featured.length
              ? homePage?.featured.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              : null}
          </Grid>
        </Box>
        <Box sx={{ marginY: "10em" }}>
          <Typography variant="h1" color="primary.main">
            Our Mission
          </Typography>
          <Box sx={{ marginX: "2em" }}>
            <Typography variant="h6" color="primary.light">
              {homePage?.mission}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
