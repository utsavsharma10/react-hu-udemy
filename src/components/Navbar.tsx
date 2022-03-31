import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" style={{background: '#00000029', color: "black"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button href="/courses"> HashedIn</Button>
          </Typography>
          <Button color="inherit" href="/courses">Courses</Button>
          <Button color="inherit" href="/wishlist">My WishList</Button>
          <IconButton
            size="large"
            aria-label="profile of current user"
            color="inherit"
            href="profile"
          >
            <AccountCircle />
          </IconButton>
          <IconButton
            size="large"
            aria-label="cart of current user"
            color="inherit"
            href="/cart"
          >
            <ShoppingCartIcon /> 
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
