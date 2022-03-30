import React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";

const Banner = (props: any) => {
  const bannerBoxStyle = {
    backgroundColor: "black",
    color: "white",
    height: "6rem",
    borderRadius: "4px",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    fontSize: "1.2rem"
  };
  return <Box style={bannerBoxStyle}>{props.bannerText}</Box>;
};

export default Banner;
