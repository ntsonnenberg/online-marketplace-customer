import { getVendors } from "@/actions/vendors";
import CompanyCard from "@/components/CompanyCard";
import { Container, Grid } from "@mui/material";

export default async function CompaniesPage() {
  const vendors = await getVendors();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ paddingTop: "8em", marginX: "2em" }}>
        {vendors &&
          vendors.map((vendor) => (
            <CompanyCard key={vendor._id} vendor={vendor} />
          ))}
      </Grid>
    </Container>
  );
}
