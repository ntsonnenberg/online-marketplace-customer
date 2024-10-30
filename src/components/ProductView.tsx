"use client";

import { useCart } from "@/hooks/use-cart";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Props {
  product: Product;
  category: Category | null;
}

export default function ProductView({ product, category }: Props) {
  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const { cart, addProduct } = useCart();

  useEffect(() => {
    if (product.images.length) {
      setActiveImage(product.images[0]);
    }
  }, [product.images]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 20,
      }}
    >
      {product?.images.length ? (
        <div>
          <Image width={450} height={450} src={activeImage} alt="activeimage" />
          <Box sx={{ display: "flex", gap: 2, marginTop: "2em" }}>
            {product.images.map((image) => (
              <Box
                key={image}
                sx={{
                  cursor: "pointer",
                  border: image === activeImage ? "solid" : "none",
                  borderWidth: image === activeImage ? "3px" : "0px",
                  borderRadius: image === activeImage ? "5px" : "0px",
                  borderColor:
                    image === activeImage ? "primary.main" : "transparent",
                }}
                onClick={() => setActiveImage(image)}
              >
                <Image src={image} alt="image" width={50} height={50} />
              </Box>
            ))}
          </Box>
        </div>
      ) : (
        <Image
          src="https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg"
          width={300}
          height={300}
          className="rounded-md w-full h-full"
          alt="product image"
        />
      )}
      <Box sx={{ marginTop: "3em" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h1" fontWeight="" color="primary.main">
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary.main">
            ${product.price}
          </Typography>
          <Typography
            variant="h2"
            color="primary.light"
            sx={{ marginTop: "1em" }}
          >
            {category?.name}
          </Typography>
          <Box
            sx={{
              marginTop: "1em",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {product.properties &&
              Object.keys(product.properties).map((key) => {
                return (
                  <Typography key={key} variant="h2" color="primary.main">
                    {key} {product.properties[key]}
                  </Typography>
                );
              })}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: "2em",
          }}
        >
          <Button variant="contained">Buy Now</Button>
          <Button variant="outlined" onClick={() => addProduct(product)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
