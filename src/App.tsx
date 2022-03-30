import React, { useState } from "react";
import CoursesList from "./components/CoursesList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
import { Box } from "@mui/system";
import Banner from "./components/Banner";
// import './App.css';

function App() {
  const [cart, setCart] = useState([] as any);
  type itemProps = {
    id: number;
    title: string;
    author: string;
    price: number;
    discount: number;
    tag1: string;
    tag2: string;
  };
  let bannerText  = "Discover Latest Courses on React" as const;

  const handleClick = (item: itemProps) => {
    // cart.push(item);

    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    console.log(cart);
  };

  // useEffect(() => {
  //   console.log("item added in cart");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />
        <Route
          path="/courses"
          element={
            <>
              <Box sx={{mx: "8rem"}}><Banner bannerText={bannerText}/></Box>
              
              <Box sx={{ mx: "8rem", display: "flex" }}>
                <Box sx={{ width: "74%" }}>
                  <CoursesList handleClick={handleClick} />
                </Box>
                <Box sx={{ width: "25%", marginLeft: "20px" }}>
                  <Cart cart={cart} setCart={setCart} sx={{ width: "40%" }} />
                </Box>
              </Box>
            </>
          }
        />
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
