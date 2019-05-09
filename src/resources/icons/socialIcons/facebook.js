import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 8 17"
}) => (

  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path fill="#FFF" fillRule="evenodd" d="M5.32 17H1.772V8.5H0V5.57h1.773V3.812C1.773 1.422 2.774 0 5.616 0h2.367v2.93H6.505c-1.108 0-1.181.41-1.181 1.175L5.319 5.57H8L7.686 8.5H5.32V17z"/>

  </svg>
);

export default SVG;
