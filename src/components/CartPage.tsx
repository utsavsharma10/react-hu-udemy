import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import CartComponent from "./CartComponent";


const CartPage = () => {
  let bannerText = "Shopping Cart" as const;
  const [price, setPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch: Dispatch<any> = useDispatch();
  const cartState = useSelector((state: any) => state.cartData.cartData);
  const modalText = "You have successfully placed your order."

  const cartItemPriceStyle = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "1rem",
  };
  const styles = {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    modalStyle: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 450,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
    }
  };


  const handlePrice = () => {
    let cartValue = 0;
    let tDiscount = 0;
    cartState.map((item: any) => (cartValue += item.price - (item.discount/100)*item.price));
    cartValue = Number(parseFloat(String(cartValue)).toFixed(2));
    setPrice(cartValue);
    cartState.map((item: any) => (tDiscount += (item.discount/100)*item.price));
    tDiscount = Number(parseFloat(String(tDiscount)).toFixed(2));
    setTotalDiscount(tDiscount);
  };
  
  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <Box sx={{ mx: "6rem" }}>
        <Banner bannerText={bannerText} />
        <Typography sx={{fontSize: 18, fontWeight: "bold", ml: "1rem", height: "2rem", display: "flex", alignItems: "center"}}>{cartState.length} Courses in Cart</Typography>
        <Box display="flex" sx={{my:"1rem"}}>
            <Box sx={{width: "74%"}}>
                <CartComponent />
            </Box>
            <Box sx={{width: "25%", ml: "1%", height: "fit-content"}} style={cartItemPriceStyle}>
                <Typography sx={{fontSize: 16}}>
                    Total Amount
                </Typography>
                <Typography sx={{fontSize: 24, fontWeight: "500", my: "0.5rem"}}>
                    Rs {price}/-
                </Typography>
                <Typography sx={{fontSize: 14, mb: "1rem", color: "#FF6738"}}>
                    You have saved Rs {totalDiscount}/-
                </Typography>
                <Button variant="contained" sx={{backgroundColor: "#FF6738", width: "100%"}} onClick={() => handleOpen()}>checkout</Button>
            </Box>
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={styles.modalStyle}>
          <Box sx={{backgroundColor: "#EFF2FF", display: "flex", justifyContent: "end", pr: "0.25rem"}}>
            <Typography sx={{}}>
              <CloseIcon onClick={() => handleClose()} sx={{cursor: "pointer"}}/>
            </Typography>
          </Box>
          <Typography sx={{p: 4}} style={styles.center}>
            {modalText}
          </Typography>
        </Box>
      </Modal>
      </Box>
    </>
  );
};

export default CartPage;
