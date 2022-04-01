import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardAction from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CourseComponent = ( {handleClick}:any) => {
  const products = useSelector((state:any) => state.allProducts.products);
    const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  const buttonStyle= {
    backgroundColor: "#FF6738",
    color: "white",
    width: "max-content"
  };
  const courseCardStyle = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: "1rem",
  };
  const renderList = products.map((product: any) => {
    const { id, title, author, price, discount, tag1, tag2 } = product;
    return (
      <Card sx={{ mb: 1.5, display: "flex", justifyContent: "space-evenly"}} key={id} style={courseCardStyle}>
      <CardMedia
          image="src/static/images/Sq_grey.jpg"
          component="img"
          height="100px"
          sx = {{width: "100px", border: "1px solid black"}}
          alt="course_img"
      />
      <CardContent sx={{flexBasis: "100%", display: "flex", alignItems: "center", padding: 0, paddingLeft:"0.5rem"}}>
        <Typography display="inline" sx={{ fontSize: 14, fontWeight: "bold", width: "40%"}}>{title}
          <p style={{margin: 0}}>
          <Button size="small" href="#" style={buttonStyle} sx={{mr: "0.5rem"}}>{tag1}</Button>
          <Button size="small" href="#" style={buttonStyle}>{tag2}</Button>
          </p>
        </Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "25%", fontWeight: 100, alignItems: "center"}}>{author}</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "15%", fontWeight: "bolder" }}>Rs {price}/-</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "10%", fontWeight: 100, textDecoration: "line-through" }}>Rs{price}/-</Typography>
      </CardContent>
      <CardAction >
        <Button size="small" sx={{fontSize: "10px"}} style={buttonStyle} onClick={() => handleClick(product)}>
          Add to Cart
        </Button>
          <IconButton component={Link} to={`/courses/${id}`} >
            <ChevronRightIcon fontSize="medium" />
          </IconButton>
      </CardAction>
    </Card>
    );
  });
  return <>{renderList}</>;
};

export default CourseComponent;