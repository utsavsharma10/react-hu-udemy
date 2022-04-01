import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dispatch } from "redux";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import CourseDetails from "./components/CourseDetails";
import CoursesListing from "./components/CourseListing";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import { addToCart } from "./redux/actions/cartActions";
import { Cart as CartType, CartData } from "./redux/constants/action-types";

// import './App.css';

function App() {
  const [cart, setCart] = useState<CartType[]>([]);
  let bannerText = "Discover Latest Courses on React" as const;

  const dispatch: Dispatch<any> = useDispatch();
  const handleClick = (item: CartType) => {
    if (cart.indexOf(item) !== -1) return;
    let cartItem = [...cart, item];
    setCart(cartItem);
    let data: CartData = {
      cartData: cartItem,
    };
    dispatch(addToCart(data));
  };
  React.useEffect(() => {
    setCart([]);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />
        <Route
          path="/courses"
          element={
            <>
              <Box sx={{ mx: "8rem" }}>
                <Banner bannerText={bannerText} />
              </Box>
              <Box sx={{ mx: "8rem", display: "flex" }}>
                <Box sx={{ width: "74%" }}>
                  <CoursesListing handleClick={handleClick} />
                </Box>
                <Box sx={{ width: "25%", marginLeft: "20px" }}>
                  <Cart cart={cart} setCart={setCart} sx={{ width: "40%" }} />
                </Box>
              </Box>
            </>
          }
        />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart}></Cart>}
        ></Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
