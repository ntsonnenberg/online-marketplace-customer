import { Product } from "@/models/Product";
import { Box } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  product: Product;
}

const boxClasses = {
  "box-shadow": "0 0 0.25rem grey",
  border: "solid",
  "border-width": "0.5px",
  "border-color": "grey",
  "border-radius": "5px",
  cursor: "pointer",
};

const imageClasses = {
  "border-radius": "5px 5px 0px 0px",
};

export default function ProductCard({ product }: Props) {
  return (
    <Grid>
      <Box sx={boxClasses}>
        {product?.images.length && (
          <Image
            src={product.images[0]}
            alt="primary-product-image"
            width={270}
            height={270}
            style={imageClasses}
          />
        )}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <h3>{product.title}</h3>
          <h3>${product.price}</h3>
        </Box>
      </Box>
    </Grid>
  );
}
