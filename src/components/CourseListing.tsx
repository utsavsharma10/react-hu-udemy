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
  

  // return (
  //   <section>
  //     {data.map((item: any) => (
  //       <CourseCard key={item.id} item={item} handleClick={handleClick}/>
  //     ))}
  //   </section>
  // );
};

export default CoursesListing;


/*
import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;

*/