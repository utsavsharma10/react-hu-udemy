import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../courseData.json";
import { addToCart } from "../redux/actions/cartActions";
import { selectedProduct } from "../redux/actions/productActions";
import { Cart as CartType, CartData } from "../redux/constants/action-types";
import Banner from "./Banner";


const CourseDetails = () => {
  const { courseId } = useParams();

  let bannerText = "Discover Latest Courses on React" as const;

  let product = useSelector((state: any) => state.product);
  const { id, title, author, price, discount, tag1, tag2 } = product;
  const [cart, setCart] = useState<CartType[]>([]);

  const dispatch = useDispatch();
  const fetchProductDetail = (cId: number) => {
    const response = data.find((item) => item.id === cId);
    console.log("response:", response);
    dispatch(selectedProduct(response));
  };

  const handleClick = (item: CartType) => {
    if (cart.indexOf(item) !== -1) return;
    let cartItem = [...cart, item];
    setCart(cartItem);
    let data: CartData = {
      cartData: cartItem,
    };
    dispatch(addToCart(data));
  };

  useEffect(() => {
    if (courseId && courseId !== "") fetchProductDetail(parseInt(courseId));
  }, [courseId]);

  return (
    <>
      <Box sx={{ mx: "6rem" }}>
        <Banner bannerText={bannerText} />
        <p>
          All Courses <ChevronRightIcon fontSize="medium" /> Responsive Design
          Course
        </p>
      </Box>
      <Box sx={{ backgroundColor: "black", height: "11rem", py: "2rem" }}>
        <Box
          display="inline-block"
          sx={{ ml: "6rem", color: "white", width: "53%" }}
        >
          <Typography fontSize="1.5rem" fontWeight="bold">
            {title}
          </Typography>
          <Typography fontSize="1rem" fontWeight="light">
            {title}
          </Typography>
          <Typography
            fontSize="1rem"
            fontWeight="light"
            color="#FF9271"
            mt="2rem"
            pb="0.25rem"
          >
            {author}
          </Typography>
          <Typography display="inline"> 
            <Button
              variant="contained"
              sx={{ backgroundColor: "#EDEDED", fontSize: "10px", height: "fit-content", color: "black", mr: "1rem" }}
            >
              {tag1}
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#EDEDED", fontSize: "10px", height: "fit-content", color: "black" }}
            >
              {tag2}
            </Button>
          </Typography>
        </Box>
        <Box display="inline-block" sx={{ position: "absolute" }}>
          <iframe
            width="426"
            height="240"
            src="https://www.youtube.com/embed/eI4an8aSsgw"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", mx: "6rem", mt: "1rem", flexDirection: "row" }}
      >
        <Box
          sx={{ padding: "1rem", border: "1px solid #E0E0E0", width: "57%" }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Course Details</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "1rem",
            border: "1px solid #E0E0E0",
            width: "31.5%",
            ml: "1.5%",
            mt: "2rem",
            height: "fit-content"
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
            Rs {price}/-
          </Typography>
          <Typography
            sx={{
              fontWeight: "light",
              fontSize: "1rem",
              textDecoration: "line-through",
            }}
          >
            Rs {price}/-
          </Typography>
          <Typography
            sx={{ fontWeight: "light", fontSize: "1rem", color: "#FF6738" }}
          >
            8 hours left for this price
          </Typography>
          <Box sx={{my: "1rem"}}>
            <Button
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#FF6738", color: "white" }}
              onClick={() => handleClick(product)}
            >
              ADD TO CART
            </Button>
            <Button variant="outlined" size="large" sx={{ ml:"1rem", color: "FF6738" }}>
              ADD TO WISHLIST
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CourseDetails;
