import { Vendor } from "@/models/Vendor";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  vendor: Vendor;
}

export default function CompanyCard({ vendor }: Props) {
  return (
    <Grid>
      <Card variant="outlined" sx={{ cursor: "pointer" }}>
        <CardContent>
          <Avatar
            src={vendor.image}
            alt="vendor-image"
            sx={{
              width: 80,
              height: 80,
              display: "flex",
              justifyContent: "center",
            }}
          />
          <Typography variant="h5" component="div" sx={{ marginTop: "1em" }}>
            {vendor.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
