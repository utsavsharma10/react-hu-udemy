import { Box, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const dispatch: Dispatch<any> = useDispatch();
  const cartState = useSelector((state: any) => state.cartData.cartData);
  const styles = {
    media: {
      height: "75px",
      minWidth: "75px",
      backgroundColor: "grey",
    },
    cartBoxStyle: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "1rem",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const handlePrice = () => {
    let tCartValue = 0;
    cartState.map(
      (item: any) =>
        (tCartValue += item.price - (item.discount / 100) * item.price)
    );
    tCartValue = Number(parseFloat(String(tCartValue)).toFixed(2));
    setPrice(tCartValue);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Card style={styles.cartBoxStyle} sx={{ mb: 0 }}>
      <CardContent sx={{ padding: 0, mb: 0}}>
        <Typography style={styles.center} sx={{ fontSize: 16, my: "0.5rem" }}>
          YOUR CART DETAILS
        </Typography>
        <Divider />

        {cartState?.map((item: any) => (
          <>
            <Box key={item.id} sx={{ my: "1.5rem" }}>
              <Box sx={{ display: "flex" }}>
                <Box style={styles.media} />
                <Typography sx={{ fontSize: 14, ml: "0.5rem" }}>
                  {item.title}
                </Typography>
              </Box>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", float: "right" }}
              >
                Rs {item.price - (item.discount / 100) * item.price}/-
              </Typography>
            </Box>
            <Divider />
          </>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 0,
            mt: "1rem",
          }}
        >
          <Box sx={{ display: "inline-block" }}>
            <Typography sx={{ fontSize: "14px" }}>Total Cart Value</Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Rs {price}/-
            </Typography>
          </Box>
          <Button
            href="/cart"
            sx={{ width: "9rem", fontSize: "12px", color: "#FF6738" }}
          >
            GO TO CHECHOUT
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cart;
