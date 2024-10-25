"use client";

import { AppBar, Box, MenuItem, Toolbar, Button } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "./Link";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/models/Product";

const appBarClasses = {
  boxShadow: 0,
  bgcolor: "transparent",
};

const toolBarClasses = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backdropFilter: "blur(24px)",
  maxHeight: 40,
  border: "1px solid",
  borderColor: "divider",
};

const menuItemsBoxClasses = {
  display: { xs: "none", md: "flex" },
};

const menuItemClasses = {
  color: "primary.main",
};

export default function AppAppBar() {
  const { cart, addProduct } = useCart();

  const dummyProduct: Product = {
    _id: "1",
    title: "Product Title",
    description: "Product Description",
    price: 123,
    images: [],
    category: null,
    vendor: "vendor1",
  };
  requestAnimationFrame;

  const addToCart = () => {
    addProduct(dummyProduct);
  };

  return (
    <AppBar position="fixed" sx={appBarClasses}>
      <Toolbar variant="regular" sx={toolBarClasses}>
        <Link href="/">
          <StoreIcon color="primary" style={{ cursor: "pointer" }} />
        </Link>
        <Box sx={menuItemsBoxClasses}>
          <Button variant="contained" onClick={addToCart}>
            Add to Cart
          </Button>
          <MenuItem sx={menuItemClasses}>
            <Link href="/companies">Companies</Link>
          </MenuItem>
          <MenuItem sx={menuItemClasses}>
            <Link href="/products">Products</Link>
          </MenuItem>
          <MenuItem sx={menuItemClasses}>
            <Link href="/cart">
              <ShoppingBagOutlinedIcon style={{ fontSize: "large" }} /> (
              {cart.products.length})
            </Link>
          </MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
