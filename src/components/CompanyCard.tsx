import { Vendor } from "@/models/Vendor";
import { Avatar, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  vendor: Vendor;
}

const boxClasses = {
  boxShadow: 3,
  padding: 2,
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "10em",
};

export default function CompanyCard({ vendor }: Props) {
  return (
    <Grid>
      <Box sx={boxClasses}>
        <Avatar
          src={vendor.image}
          alt="vendor-image"
          sx={{ width: 80, height: 80 }}
        />
        <h4>{vendor.name}</h4>
      </Box>
    </Grid>
  );
}
