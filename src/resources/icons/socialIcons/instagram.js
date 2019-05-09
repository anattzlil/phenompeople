import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  height = "100%",
  className = "",
  color = "#000",
  viewBox = "0 0 24 24"
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
    <g fill='none' fillRule='evenodd'>
        <rect width='22' height='22' x='1' y='1' stroke='#FFF' strokeLinecap='round'
        strokeLinejoin='round' strokeWidth='2' rx='4' />
        <path stroke='#FFF' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
        d='M16.4 11.307a4.4 4.4 0 1 1-8.705 1.29 4.4 4.4 0 0 1 8.705-1.29z' />
        <circle cx='18.6' cy='5.4' r='1.1' fill='#FFF' />
        <path stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.6'
        d='M18.05 5.95' />
    </g>
  </svg>
);

export default SVG;
