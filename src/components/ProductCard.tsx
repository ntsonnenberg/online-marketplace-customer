import { Product } from "@/models/Product";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "./Link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Grid>
      <Card variant="outlined" sx={{ cursor: "pointer" }}>
        <Link href={`/products/${product._id}`}>
          {product?.images.length ? (
            <CardMedia
              sx={{ height: 270, width: 270 }}
              image={product.images[0]}
              title="Primary Product"
            />
          ) : null}
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography gutterBottom component="div" variant="h2">
                {product.title}
              </Typography>
              <Typography gutterBottom component="div" variant="h2">
                ${product.price}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}
