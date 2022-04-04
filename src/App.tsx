import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import CartPage from "./components/CartPage";
import CourseDetails from "./components/CourseDetails";
import CoursesListing from "./components/CourseListing";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";

function App() {
  let bannerText = "Discover Latest Courses on React" as const;
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />
        <Route
          path="/courses"
          element={
            <>
              <Box sx={{ mx: "6rem" }}>
                <Banner bannerText={bannerText} />
              </Box>
              <Box sx={{ mx: "6rem", display: "flex" }}>
                <Box sx={{ width: "74%" }}>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: "bold", ml: "1rem", height: "4.1rem", display: "flex", alignItems: "center"}}
                  >
                    All Courses
                  </Typography>
                  <CoursesListing />
                </Box>
                <Box sx={{ width: "25%", marginLeft: "20px" }}>
                  <TextField
                    sx={{
                      marginBottom: 2,
                      display: "inline-block",
                      backgroundColor: "#EFF2FF"
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    size="small"
                    placeholder="Search here"
                    fullWidth
                  />
                  <Cart />
                </Box>
              </Box>
            </>
          }
        />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
