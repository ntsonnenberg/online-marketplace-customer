import { Vendor } from "@/models/Vendor";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "./Link";

interface Props {
  vendor: Vendor;
}

export default function CompanyCard({ vendor }: Props) {
  return (
    <Grid>
      <Card
        variant="outlined"
        sx={{ cursor: "pointer", backgroundColor: "#f8f8f8" }}
      >
        <Link href={`/companies/${vendor._id}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={vendor.image}
              alt="vendor-image"
              sx={{
                width: 80,
                height: 80,
              }}
            />
            <Typography variant="h5" component="div" sx={{ marginTop: "1em" }}>
              {vendor.name}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}
