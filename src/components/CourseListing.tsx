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
      console.log("data:", data);
    };
    
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <section>
        <CourseComponent handleClick={handleClick}/>
      </section>
    );
};

export default CoursesListing;