import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../courseData.json";
import { setProducts } from "../redux/actions/productActions";
import CourseComponent from "./CourseComponent";


const CoursesListing = ({handleClick}: any) => {

    const products = useSelector((state: any) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = () => {
      dispatch(setProducts(data));
    };
    
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <Box>
        <CourseComponent/>
      </Box>
    );
};

export default CoursesListing;