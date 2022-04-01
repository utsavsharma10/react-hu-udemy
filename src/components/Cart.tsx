import { Box, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { CartData } from "../redux/constants/action-types";

const Cart = ({ cart, setCart }: any) => {
  const [price, setPrice] = useState(0);
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const cartBoxStyle = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "1rem",
  };
  const dispatch: Dispatch<any> = useDispatch();

  const handleRemove = (id: number) => {
    const arr = testCart.filter((item: any) => item.id !== id);
    setCart(arr);
    handlePrice();
    let cardData: CartData = {
      cartData: arr,
    };
    dispatch(addToCart(cardData));
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item: any) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const testCart = useSelector((state: any) => state.cartData.cartData);

  return (
    <Card style={cartBoxStyle}>
      <CardContent sx={{ padding: 0 }}>
        <Typography style={center}>YOUR CART DETAILS</Typography>
        <Divider />

        {testCart?.map((item: any) => (
          <>
            <Box key={item.id} sx={{ my: "1.5rem" }}>
              <Box sx={{ display: "flex" }}>
                <CardMedia
                  image="src"
                  component="img"
                  height="70px"
                  sx={{
                    width: "100px",
                    border: "1px solid black",
                    marginRight: "3px",
                  }}
                  alt="course_img"
                />
                <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
              </Box>
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", float: "right" }}
              >
                Rs {item.price}/-
              </Typography>
              <Button
                sx={{ width: "9rem", fontSize: "12px", color: "#FF6738" }}
                onClick={() => handleRemove(item.id)}
              >Remove</Button>
            </Box>
            <Divider />
          </>
        ))}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "inline-block" }}>
            <Typography sx={{ fontSize: "14px" }}>Total Cart Value</Typography>
            <Typography>Rs {price}/-</Typography>
          </Box>
          <Button sx={{ width: "9rem", fontSize: "12px", color: "#FF6738" }}>
            GO TO CHECHOUT
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cart;
