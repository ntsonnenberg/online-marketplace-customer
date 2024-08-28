import { AppBar, Box, MenuItem, Toolbar } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";

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
  return (
    <AppBar position="fixed" sx={appBarClasses}>
      <Toolbar variant="regular" sx={toolBarClasses}>
        <Link href="/">
          <StoreIcon color="primary" style={{ cursor: "pointer" }} />
        </Link>
        <Box sx={menuItemsBoxClasses}>
          <Link href="/companies">
            <MenuItem sx={menuItemClasses}>Companies</MenuItem>
          </Link>
          <Link href="/products">
            <MenuItem sx={menuItemClasses}>Products</MenuItem>
          </Link>
          <Link href="/cart">
            <MenuItem sx={menuItemClasses}>
              <ShoppingBagOutlinedIcon style={{ fontSize: "large" }} />
            </MenuItem>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
