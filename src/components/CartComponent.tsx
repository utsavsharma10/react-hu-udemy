import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { Cart as CartType, CartData } from "../redux/constants/action-types";

const CartComponent = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState<CartType[]>([]);
  const dispatch: Dispatch<any> = useDispatch();
  const cartState = useSelector((state: any) => state.cartData.cartData);
  const styles = {
    media: {
      height: "75px",
      minWidth: "75px",
      backgroundColor: "grey"
    },
    cartItemStyle: {
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: "1rem",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonStyle: {
      backgroundColor: "#FF6738",
      color: "white",
      width: "max-content"
    }
  };

  const handleRemove = (id: number) => {
    const arr = cartState.filter((item: any) => item.id !== id);
    setCart(arr);
    handlePrice();
    let cardData: CartData = {
      cartData: arr,
    };
    dispatch(addToCart(cardData));
  };

  const handlePrice = () => {
    let ans = 0;
    cartState.map((item: any) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Box>
        {cartState?.map((item: any) => (
          <>
            <Box key={item.id} style={styles.cartItemStyle} sx={{ mb: "1rem" }}>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box sx={{display: "flex" , width: "40%"}}>
                  <Box style={styles.media} />

                    <Box display="inline" sx={{ margin: 0, ml: "0.5rem"}}>
                        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>{item.title}</Typography>
                        <Typography sx={{ fontSize: 12, fontWeight: "light"}}>{item.author}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "40%"}}>
                    <Button variant="text" sx={{height: "fit-content", fontSize: 12}}>Move to Wishlist</Button>
                    <Typography  sx={{ fontSize: 16, width: "15%", fontWeight: "bolder", display: "contents"}}>Rs {item.price - (item.discount/100)*item.price}/-</Typography>
                    <DeleteOutlinedIcon display="inline" sx={{ fontSize: "2rem", cursor: "pointer"}}onClick={() => handleRemove(item.id)}></DeleteOutlinedIcon>
                </Box>
              </Box>
            </Box>
          </>
        ))}
    </Box>
  );
};

export default CartComponent;
