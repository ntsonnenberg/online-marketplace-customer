import { getProducts } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default async function ProductsPage() {
  const products = await getProducts({});

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ paddingTop: "8em" }}>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </Grid>
    </Container>
  );
}
