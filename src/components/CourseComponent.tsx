import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardAction from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { addToCart } from "../redux/actions/cartActions";
import { Cart as CartType, CartData } from "../redux/constants/action-types";

const CourseComponent = () => {
  const products = useSelector((state:any) => state.allProducts.products);
  const [cart, setCart] = useState<CartType[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch: Dispatch<any> = useDispatch();
  const modalText = "Courses added in the cart."
  
  const styles = {
    media: {
      height: "75px",
      width: "100px",
      backgroundColor: "grey"
    },
    courseCardStyle: {
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

  const handleClick = (item: CartType) => {
    if (cart.indexOf(item) !== -1) return;
    let cartItem = [...cart, item];
    setCart(cartItem);
    let data: CartData = {
      cartData: cartItem,
    };
    dispatch(addToCart(data));
    handleOpen();
  };
  const renderList = products.map((product: any) => {
    const { id, title, author, price, discount, tag1, tag2 } = product;
    const discountedPrice = price - (discount/100)*price;
    var finalPrice = 0;
    if (discount!=0) {
      finalPrice = price - (discount/100)*price;
    } else {
      finalPrice = price;
    }
    return (
      <Card sx={{ mb: 1.5, display: "flex", justifyContent: "space-evenly"}} key={id} style={styles.courseCardStyle}>
        <Box style={styles.media} />
      <CardContent sx={{flexBasis: "100%", display: "flex", alignItems: "center", padding: 0, paddingLeft:"0.5rem"}}>
        <Typography display="inline" sx={{ fontSize: 14, fontWeight: "bold", width: "40%"}}>{title}
          <Box style={{margin: 0}}>
          <Button size="small" href="#" style={styles.buttonStyle} sx={{mr: "0.5rem",fontSize: "10px", height: "fit-content"}}>{tag1}</Button>
          <Button size="small" href="#" style={styles.buttonStyle} sx={{fontSize: "10px"}}>{tag2}</Button>
          </Box>
        </Typography>
        <Typography display="inline" sx={{ fontSize: 16, width: "35%", fontWeight: 100, alignItems: "center"}}>{author}</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "15%", fontWeight: "bolder" }}>Rs {finalPrice}/-</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "10%", fontWeight: 100, textDecoration: "line-through" }} style={styles.center}>{discount ? price : "-"}</Typography>
      </CardContent>
      <CardAction sx={{margin:0}}>
        <Button size="small" sx={{fontSize: "12px"}} style={styles.buttonStyle} onClick={() => handleClick(product)}>
          Add to Cart
        </Button>
          <IconButton component={Link} to={`/courses/${id}`} >
            <ChevronRightIcon fontSize="medium" />
          </IconButton>
      </CardAction>
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
    </Card>
    );
  });
  return <>{renderList}</>;
};

export default CourseComponent;