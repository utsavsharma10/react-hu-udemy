import React from "react";

const CourseCard = ({ item, handleClick}:any) => {
  const { id, title, author, price, discount, tag1, tag2 } = item;
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <p>{tag1}</p>
      <p>{tag2}</p>
      <button onClick={()=>handleClick(item)}>Add to Cart</button>
    </div>
  );
};

export default CourseCard;
