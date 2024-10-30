import { getCategory } from "@/actions/categories";
import { getProduct } from "@/actions/products";
import ProductView from "@/components/ProductView";
import { Box } from "@mui/material";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  const category = await getCategory(product?.category || "");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginY: "10em",
      }}
    >
      {product && <ProductView product={product} category={category} />}
    </Box>
  );
}
