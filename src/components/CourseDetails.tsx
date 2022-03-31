import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import data from "../courseData.json";
import { selectedProduct } from "../redux/actions/productActions";

const CourseDetails = () => {
  const { courseId } = useParams();
  const cId = Number(courseId);

  let product = useSelector((state: any) => state.product);
  const { id, title, author, price, discount, tag1, tag2 } = product;

  const dispatch = useDispatch();
  const fetchProductDetail = (cId: number) => {
    const response = data.find((item) => item.id === 2); // Golmal
    console.log("response:", response);
    dispatch(selectedProduct(response));
  };

  useEffect(() => {
    if (courseId && courseId !== "") fetchProductDetail(Number("courseId"));
    }, [courseId]);

  return (
    <div>
      Details: {id},{title},{price}
    </div>
  );
};

export default CourseDetails;
