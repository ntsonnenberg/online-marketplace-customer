import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

export default function Cart() {
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
        <h3>Cart</h3>
        <ShoppingBagOutlined style={{ fontSize: "large " }} />
      </Box>
      <TableContainer>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>Shirt (1)</TableCell>
              <TableCell>$19.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pants (2)</TableCell>
              <TableCell>$59.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shoes (1)</TableCell>
              <TableCell>$119.99</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
