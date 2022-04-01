import React from "react";
import data from "../courseData.json";
import CourseCard from "./CourseCard";

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
