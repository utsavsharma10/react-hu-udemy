import React, { useState } from "react";
import CoursesList from "./components/CoursesList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { Routes, Route, Navigate} from "react-router-dom";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";
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
        <Route path="/" element={<Navigate to="/courses" />}/>
        <Route
          path="/courses"
          element={
            <>
              <CoursesList handleClick={handleClick} />
              <Cart cart={cart} setCart={setCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart}></Cart>}
        ></Route>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
