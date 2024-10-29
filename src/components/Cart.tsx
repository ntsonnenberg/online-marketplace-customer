"use client";

import { useCart } from "@/hooks/use-cart";
import { ShoppingBagOutlined, Clear } from "@mui/icons-material";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export default function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <Container
      sx={{ p: 1, borderRadius: "5px", boxShadow: 3, color: "primary.main" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Cart</Typography>
        <ShoppingBagOutlined style={{ fontSize: "large " }} />
      </Box>
      {cart.length > 0 ? (
        <TableContainer>
          <Table size="small">
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product._id}>
                  <TableCell sx={{ color: "primary.main" }}>
                    {product.title}
                  </TableCell>
                  <TableCell sx={{ color: "primary.main" }}>
                    ${product.price}
                  </TableCell>
                  <TableCell
                    sx={{ cursor: "pointer" }}
                    onClick={() => removeProduct(product)}
                  >
                    <Clear fontSize="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ marginY: "2em", marginX: "4em" }}>
          <Typography>Cart Empty</Typography>
        </Box>
      )}
    </Container>
  );
}
