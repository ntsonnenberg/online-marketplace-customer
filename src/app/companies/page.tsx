import { getVendors } from "@/actions/vendors";
import CompanyCard from "@/components/CompanyCard";
import { Container, Grid } from "@mui/material";

export default async function CompaniesPage() {
  const vendors = await getVendors();

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ paddingTop: "8em" }}>
          {vendors &&
            vendors.map((vendor) => (
              <CompanyCard key={vendor._id} vendor={vendor} />
            ))}
        </Grid>
      </Container>
    </div>
  );
}
