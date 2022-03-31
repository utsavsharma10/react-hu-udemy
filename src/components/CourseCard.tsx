import React from "react";
import Card from "@mui/material/Card";
import CardAction from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { flexbox } from "@mui/system";

const CourseCard = ({ item, handleClick }: any) => {
  const { id, title, author, price, discount, tag1, tag2 } = item;
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

  return (
    <Card sx={{ mb: 1.5, display: "flex", justifyContent: "space-evenly"}} style={courseCardStyle}>
      <CardMedia
          image="src/static/images/Sq_grey.jpg"
          component="img"
          height="100px"
          sx = {{width: "100px", border: "1px solid black"}}
          alt="course_img"
      />
      <CardContent sx={{flexBasis: "100%", display: "flex", alignItems: "center", padding: 0, paddingLeft:"0.5rem"}}>
        <Typography display="inline" sx={{ fontSize: 14, fontWeight: "bold", width: "40%" }}>{title}
          <p>
          <Button size="small" href="#" style={buttonStyle} sx={{mr: "0.5rem"}}>{tag1}</Button>
          <Button size="small" href="#" style={buttonStyle}>{tag2}</Button>
          </p>
        </Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "25%", fontWeight: 100, alignItems: "center"}}>{author}</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "15%", fontWeight: "bolder" }}>Rs {price}/-</Typography>
        <Typography display="inline" sx={{ fontSize: 18, width: "10%", fontWeight: 100, textDecoration: "line-through" }}>Rs{price}/-</Typography>
      </CardContent>
      <CardAction >
        <Button size="small" sx={{fontSize: "10px"}} style={buttonStyle} onClick={() => handleClick(item)}>
          Add to Cart
        </Button>
      </CardAction>
    </Card>
  );
};

export default CourseCard;
