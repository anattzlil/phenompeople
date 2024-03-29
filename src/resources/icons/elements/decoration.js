import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 163 12"
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
    <g fill="none" fillRule="evenodd">
        <path fill={color} d="M81.657 0l5.657 5.657-5.657 5.657L76 5.657z"/>
        <path stroke={color} stroke-linecap="square" d="M97 5.5h65.121M1 5.5h65.121"/>
    </g>
  </svg>
);

export default SVG;
