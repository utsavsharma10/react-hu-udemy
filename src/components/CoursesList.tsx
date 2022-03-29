import React from "react";
import CourseCard from "./CourseCard";
import data from "../courseData.json";

const CoursesList = ({handleClick}:any) => {

  return (
    <section>
      {data.map((item: any) => (
        <CourseCard key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </section>
  );
};

export default CoursesList;
